export interface CreateExpense {
    Records:  Records;
    Expenses: Expense[];
}

export interface Expense {
    Id:                      number;
    Status:                  number;
    Supplier:                string;
    IssueDate:               Date;
    OriginalAmount:          number;
    OriginalCurrency:        string;
    ExchangeRate:            number;
    Net:                     number;
    Tax:                     number;
    TaxName:                 string;
    OtherTaxes:              number;
    RetentionName:           string;
    Retention:               number;
    Total:                   number;
    Currency:                string;
    Reimbursable:            boolean;
    Category:                string;
    CategoryCode:            string;
    CategoryGroup:           string;
    CategoryGroupCode:       string;
    SatInfo:                 null;
    SunatInfo:               null;
    Note:                    string;
    IntegrationDate:         Date;
    IntegrationExternalCode: string;
    ExtraFields:             ExtraField[];
    Files:                   any[];
    NbrFiles:                number;
    ReportId:                number;
    ExpensePolicyId:         number;
    UserId:                  number;
}

export interface ExtraField {
    Name:  string;
    Value: string;
    Code:  string;
}

export interface Records {
    TotalRecords: number;
    Expenses:     number;
    Page:         number;
    Pages:        number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toCreateExpense(json: string): CreateExpense {
        return cast(JSON.parse(json), r("CreateExpense"));
    }

    public static createExpenseToJson(value: CreateExpense): string {
        return JSON.stringify(uncast(value, r("CreateExpense")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "CreateExpense": o([
        { json: "Records", js: "Records", typ: r("Records") },
        { json: "Expenses", js: "Expenses", typ: a(r("Expense")) },
    ], false),
    "Expense": o([
        { json: "Id", js: "Id", typ: 0 },
        { json: "Status", js: "Status", typ: 0 },
        { json: "Supplier", js: "Supplier", typ: "" },
        { json: "IssueDate", js: "IssueDate", typ: Date },
        { json: "OriginalAmount", js: "OriginalAmount", typ: 0 },
        { json: "OriginalCurrency", js: "OriginalCurrency", typ: "" },
        { json: "ExchangeRate", js: "ExchangeRate", typ: 0 },
        { json: "Net", js: "Net", typ: 0 },
        { json: "Tax", js: "Tax", typ: 0 },
        { json: "TaxName", js: "TaxName", typ: "" },
        { json: "OtherTaxes", js: "OtherTaxes", typ: 0 },
        { json: "RetentionName", js: "RetentionName", typ: "" },
        { json: "Retention", js: "Retention", typ: 0 },
        { json: "Total", js: "Total", typ: 0 },
        { json: "Currency", js: "Currency", typ: "" },
        { json: "Reimbursable", js: "Reimbursable", typ: true },
        { json: "Category", js: "Category", typ: "" },
        { json: "CategoryCode", js: "CategoryCode", typ: "" },
        { json: "CategoryGroup", js: "CategoryGroup", typ: "" },
        { json: "CategoryGroupCode", js: "CategoryGroupCode", typ: "" },
        { json: "SatInfo", js: "SatInfo", typ: null },
        { json: "SunatInfo", js: "SunatInfo", typ: null },
        { json: "Note", js: "Note", typ: "" },
        { json: "IntegrationDate", js: "IntegrationDate", typ: Date },
        { json: "IntegrationExternalCode", js: "IntegrationExternalCode", typ: "" },
        { json: "ExtraFields", js: "ExtraFields", typ: a(r("ExtraField")) },
        { json: "Files", js: "Files", typ: a("any") },
        { json: "NbrFiles", js: "NbrFiles", typ: 0 },
        { json: "ReportId", js: "ReportId", typ: 0 },
        { json: "ExpensePolicyId", js: "ExpensePolicyId", typ: 0 },
        { json: "UserId", js: "UserId", typ: 0 },
    ], false),
    "ExtraField": o([
        { json: "Name", js: "Name", typ: "" },
        { json: "Value", js: "Value", typ: "" },
        { json: "Code", js: "Code", typ: "" },
    ], false),
    "Records": o([
        { json: "TotalRecords", js: "TotalRecords", typ: 0 },
        { json: "Expenses", js: "Expenses", typ: 0 },
        { json: "Page", js: "Page", typ: 0 },
        { json: "Pages", js: "Pages", typ: 0 },
    ], false),
};
