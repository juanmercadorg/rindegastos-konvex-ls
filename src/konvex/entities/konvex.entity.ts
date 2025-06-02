export interface Invoices {
    status:   number;
    software: string;
    data:     Datum[];
}

export interface Datum {
    id:               number;
    date:             Date;
    dueDate:          Date;
    datetime:         string;
    observations:     string;
    anotation:        string;
    termsConditions:  string;
    status:           Status;
    client:           Client;
    numberTemplate:   NumberTemplate;
    subtotal:         number;
    discount:         number;
    tax:              number;
    total:            number;
    totalPaid:        number;
    balance:          number;
    decimalPrecision: number;
    warehouse:        Warehouse;
    term:             string;
    barCodeContent:   string;
    seller:           number;
    priceList:        PriceList;
    payments:         Payment[];
    items:            Item[];
    costCenter:       string;
    printingTemplate: PrintingTemplate;
}

export interface Client {
    id:                   string;
    name:                 string;
    identifiaction:       string;
    phonePrimary:         null;
    mobile:               string;
    email:                string;
    address:              Address;
    identifiactionObject: PriceList;
}

export interface Address {
    address:     string;
    departament: Departament | null;
    city:        string;
    country?:    Country;
    zipCode:     string;
}

export enum Country {
    MX = "MX",
}

export enum Departament {
    Df = "DF",
}

export interface PriceList {
}

export interface Item {
    name:        string;
    description: string;
    price:       number;
    discount:    number;
    reference:   string;
    quantity:    number;
    id:          number;
    productKey:  null;
    unit:        string;
    tax:         Tax[];
    total:       number;
}

export interface Tax {
    id:                number;
    name:              Name;
    percentage:        number;
    description:       string;
    status:            string;
    categoryFavorable: PriceList;
    categoryToBePaid:  PriceList;
    rate:              number;
    amount:            number;
}

export enum Name {
    B2 = "B2",
}

export interface NumberTemplate {
    id:              DocumentType;
    prefix:          Prefix;
    number:          number;
    text:            string;
    documentType:    DocumentType;
    fullNumber:      string;
    formattedNumber: number;
}

export enum DocumentType {
    DDocumentItems = "dDocument_Items",
}

export enum Prefix {
    A0 = "A0",
}

export interface Payment {
    id:            number;
    amount:        number;
    paymentMethod: PaymentMethod;
}

export enum PaymentMethod {
    INCTransfer = "INC_Transfer",
}

export interface PrintingTemplate {
    id:       string;
    name:     string;
    pageSize: string;
}

export enum Status {
    Open = "open",
}

export interface Warehouse {
    id: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toInvoices(json: string): Invoices {
        return cast(JSON.parse(json), r("Invoices"));
    }

    public static invoicesToJson(value: Invoices): string {
        return JSON.stringify(uncast(value, r("Invoices")), null, 2);
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
    "Invoices": o([
        { json: "status", js: "status", typ: 0 },
        { json: "software", js: "software", typ: "" },
        { json: "data", js: "data", typ: a(r("Datum")) },
    ], false),
    "Datum": o([
        { json: "id", js: "id", typ: 0 },
        { json: "date", js: "date", typ: Date },
        { json: "dueDate", js: "dueDate", typ: Date },
        { json: "datetime", js: "datetime", typ: "" },
        { json: "observations", js: "observations", typ: "" },
        { json: "anotation", js: "anotation", typ: "" },
        { json: "termsConditions", js: "termsConditions", typ: "" },
        { json: "status", js: "status", typ: r("Status") },
        { json: "client", js: "client", typ: r("Client") },
        { json: "numberTemplate", js: "numberTemplate", typ: r("NumberTemplate") },
        { json: "subtotal", js: "subtotal", typ: 3.14 },
        { json: "discount", js: "discount", typ: 0 },
        { json: "tax", js: "tax", typ: 3.14 },
        { json: "total", js: "total", typ: 3.14 },
        { json: "totalPaid", js: "totalPaid", typ: 0 },
        { json: "balance", js: "balance", typ: 3.14 },
        { json: "decimalPrecision", js: "decimalPrecision", typ: 0 },
        { json: "warehouse", js: "warehouse", typ: r("Warehouse") },
        { json: "term", js: "term", typ: "" },
        { json: "barCodeContent", js: "barCodeContent", typ: "" },
        { json: "seller", js: "seller", typ: 0 },
        { json: "priceList", js: "priceList", typ: r("PriceList") },
        { json: "payments", js: "payments", typ: a(r("Payment")) },
        { json: "items", js: "items", typ: a(r("Item")) },
        { json: "costCenter", js: "costCenter", typ: "" },
        { json: "printingTemplate", js: "printingTemplate", typ: r("PrintingTemplate") },
    ], false),
    "Client": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "identifiaction", js: "identifiaction", typ: "" },
        { json: "phonePrimary", js: "phonePrimary", typ: null },
        { json: "mobile", js: "mobile", typ: "" },
        { json: "email", js: "email", typ: "" },
        { json: "address", js: "address", typ: r("Address") },
        { json: "identifiactionObject", js: "identifiactionObject", typ: r("PriceList") },
    ], false),
    "Address": o([
        { json: "address", js: "address", typ: "" },
        { json: "departament", js: "departament", typ: u(r("Departament"), null) },
        { json: "city", js: "city", typ: "" },
        { json: "country", js: "country", typ: u(undefined, r("Country")) },
        { json: "zipCode", js: "zipCode", typ: "" },
    ], false),
    "PriceList": o([
    ], false),
    "Item": o([
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "price", js: "price", typ: 3.14 },
        { json: "discount", js: "discount", typ: 0 },
        { json: "reference", js: "reference", typ: "" },
        { json: "quantity", js: "quantity", typ: 0 },
        { json: "id", js: "id", typ: 0 },
        { json: "productKey", js: "productKey", typ: null },
        { json: "unit", js: "unit", typ: "" },
        { json: "tax", js: "tax", typ: a(r("Tax")) },
        { json: "total", js: "total", typ: 3.14 },
    ], false),
    "Tax": o([
        { json: "id", js: "id", typ: 0 },
        { json: "name", js: "name", typ: r("Name") },
        { json: "percentage", js: "percentage", typ: 0 },
        { json: "description", js: "description", typ: "" },
        { json: "status", js: "status", typ: "" },
        { json: "categoryFavorable", js: "categoryFavorable", typ: r("PriceList") },
        { json: "categoryToBePaid", js: "categoryToBePaid", typ: r("PriceList") },
        { json: "rate", js: "rate", typ: 0 },
        { json: "amount", js: "amount", typ: 3.14 },
    ], false),
    "NumberTemplate": o([
        { json: "id", js: "id", typ: r("DocumentType") },
        { json: "prefix", js: "prefix", typ: r("Prefix") },
        { json: "number", js: "number", typ: 0 },
        { json: "text", js: "text", typ: "" },
        { json: "documentType", js: "documentType", typ: r("DocumentType") },
        { json: "fullNumber", js: "fullNumber", typ: "" },
        { json: "formattedNumber", js: "formattedNumber", typ: 0 },
    ], false),
    "Payment": o([
        { json: "id", js: "id", typ: 0 },
        { json: "amount", js: "amount", typ: 0 },
        { json: "paymentMethod", js: "paymentMethod", typ: r("PaymentMethod") },
    ], false),
    "PrintingTemplate": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "pageSize", js: "pageSize", typ: "" },
    ], false),
    "Warehouse": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "Country": [
        "MX",
    ],
    "Departament": [
        "DF",
    ],
    "Name": [
        "B2",
    ],
    "DocumentType": [
        "dDocument_Items",
    ],
    "Prefix": [
        "A0",
    ],
    "PaymentMethod": [
        "INC_Transfer",
    ],
    "Status": [
        "open",
    ],
};
