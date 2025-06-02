export interface Entries {
    status:   number;
    software: string;
    data:     Datum[];
}

export interface Datum {
    JdtNum:          number;
    ReferenceDate:   Date;
    TaxDate:         Date;
    DueDate:         Date;
    Series:          number;
    Number:          number;
    OriginalJournal: OriginalJournal;
    Lines:           Line[];
    sap:             Sap;
}

export interface Line {
    Line_ID:       number;
    AccountCode:   string;
    Debit:         number;
    Credit:        number;
    ContraAccount: string;
    DueDate:       Date;
    Reference2: string;
}

export enum OriginalJournal {
    TtInventoryOpeningBalance = "ttInventoryOpeningBalance",
    TtOpeningBalance = "ttOpeningBalance",
}

export interface Sap {
    ReferenceDate:                           Date;
    Memo:                                    Memo;
    Reference:                               null | string;
    Reference2:                              null | string;
    TransactionCode:                         null;
    ProjectCode:                             null;
    TaxDate:                                 Date;
    JdtNum:                                  number;
    Indicator:                               null;
    UseAutoStorno:                           AdjustTransaction;
    StornoDate:                              null;
    VatDate:                                 null;
    Series:                                  number;
    StampTax:                                AdjustTransaction;
    DueDate:                                 Date;
    AutoVAT:                                 AdjustTransaction;
    Number:                                  number;
    FolioNumber:                             null;
    FolioPrefixString:                       null;
    ReportEU:                                AdjustTransaction;
    Report347:                               AdjustTransaction;
    Printed:                                 Printed;
    LocationCode:                            null;
    OriginalJournal:                         OriginalJournal;
    Original:                                number;
    BaseReference:                           string;
    BlockDunningLetter:                      AdjustTransaction;
    AutomaticWT:                             AdjustTransaction;
    WTSum:                                   number;
    WTSumSC:                                 number;
    WTSumFC:                                 number;
    SignatureInputMessage:                   null;
    SignatureDigest:                         null;
    CertificationNumber:                     null;
    PrivateKeyVersion:                       null;
    Corisptivi:                              AdjustTransaction;
    Reference3:                              null;
    DocumentType:                            null;
    DeferredTax:                             AdjustTransaction;
    BlanketAgreementNumber:                  null;
    OperationCode:                           null;
    ResidenceNumberType:                     ResidenceNumberType;
    ECDPostingType:                          ECDPostingType;
    ExposedTransNumber:                      null;
    PointOfIssueCode:                        null;
    Letter:                                  null;
    FolioNumberFrom:                         null;
    FolioNumberTo:                           null;
    IsCostCenterTransfer:                    AdjustTransaction;
    ReportingSectionControlStatementVAT:     null;
    ExcludeFromTaxReportControlStatementVAT: AdjustTransaction;
    SAPPassport:                             null;
    Cig:                                     null;
    Cup:                                     null;
    AdjustTransaction:                       AdjustTransaction;
    AttachmentEntry:                         null;
    SAFTTransactionType:                     SAFTTransactionType;
    JournalEntryLines:                       JournalEntryLine[];
    WithholdingTaxDataCollection:            any[];
    ElectronicProtocols:                     any[];
}

export enum AdjustTransaction {
    TNO = "tNO",
}

export enum ECDPostingType {
    EcdNormal = "ecdNormal",
}

export interface JournalEntryLine {
    Line_ID:                        number;
    AccountCode:                    string;
    Debit:                          number;
    Credit:                         number;
    FCDebit:                        number;
    FCCredit:                       number;
    FCCurrency:                     null;
    DueDate:                        Date;
    ShortName:                      string;
    ContraAccount:                  string;
    LineMemo:                       Memo;
    ReferenceDate1:                 Date;
    ReferenceDate2:                 null;
    Reference1:                     string;
    Reference2:                     string;
    ProjectCode:                    null;
    CostingCode:                    null;
    TaxDate:                        Date;
    BaseSum:                        number;
    TaxGroup:                       null;
    DebitSys:                       number;
    CreditSys:                      number;
    VatDate:                        null;
    VatLine:                        AdjustTransaction;
    SystemBaseAmount:               number;
    VatAmount:                      number;
    SystemVatAmount:                number;
    GrossValue:                     number;
    AdditionalReference:            null;
    CheckAbs:                       null;
    CostingCode2:                   null;
    CostingCode3:                   null;
    CostingCode4:                   null;
    TaxCode:                        null;
    TaxPostAccount:                 TaxPostAccount;
    CostingCode5:                   null;
    LocationCode:                   null;
    ControlAccount:                 string;
    EqualizationTaxAmount:          number;
    SystemEqualizationTaxAmount:    number;
    TotalTax:                       number;
    SystemTotalTax:                 number;
    WTLiable:                       AdjustTransaction;
    WTRow:                          AdjustTransaction;
    PaymentBlock:                   AdjustTransaction;
    BlockReason:                    null;
    FederalTaxID:                   null;
    BPLID:                          null;
    BPLName:                        null;
    VATRegNum:                      null;
    PaymentOrdered:                 AdjustTransaction;
    ExposedTransNumber:             null;
    DocumentArray:                  null;
    DocumentLine:                   null;
    CostElementCode:                null;
    Cig:                            null;
    Cup:                            null;
    IncomeClassificationCategory:   null;
    IncomeClassificationType:       null;
    ExpensesClassificationCategory: null;
    ExpensesClassificationType:     null;
    VATClassificationCategory:      null;
    VATClassificationType:          null;
    VATExemptionCause:              null;
    CashFlowAssignments:            any[];
}

export enum Memo {
    Empty = "",
    GLAccountsOpeningBalance = "G/L Accounts Opening Balance",
}

export enum TaxPostAccount {
    TpaDefault = "tpa_Default",
}

export enum Printed {
    PSNo = "psNo",
}

export enum ResidenceNumberType {
    RntSpanishFiscalID = "rntSpanishFiscalID",
}

export enum SAFTTransactionType {
    SaftttDefault = "safttt_Default",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toEntries(json: string): Entries {
        return cast(JSON.parse(json), r("Entries"));
    }

    public static entriesToJson(value: Entries): string {
        return JSON.stringify(uncast(value, r("Entries")), null, 2);
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
    "Entries": o([
        { json: "status", js: "status", typ: 0 },
        { json: "software", js: "software", typ: "" },
        { json: "data", js: "data", typ: a(r("Datum")) },
    ], false),
    "Datum": o([
        { json: "JdtNum", js: "JdtNum", typ: 0 },
        { json: "ReferenceDate", js: "ReferenceDate", typ: Date },
        { json: "TaxDate", js: "TaxDate", typ: Date },
        { json: "DueDate", js: "DueDate", typ: Date },
        { json: "Series", js: "Series", typ: 0 },
        { json: "Number", js: "Number", typ: 0 },
        { json: "OriginalJournal", js: "OriginalJournal", typ: r("OriginalJournal") },
        { json: "Lines", js: "Lines", typ: a(r("Line")) },
        { json: "sap", js: "sap", typ: r("Sap") },
    ], false),
    "Line": o([
        { json: "Line_ID", js: "Line_ID", typ: 0 },
        { json: "AccountCode", js: "AccountCode", typ: "" },
        { json: "Debit", js: "Debit", typ: 3.14 },
        { json: "Credit", js: "Credit", typ: 3.14 },
        { json: "ContraAccount", js: "ContraAccount", typ: "" },
        { json: "DueDate", js: "DueDate", typ: Date },
    ], false),
    "Sap": o([
        { json: "ReferenceDate", js: "ReferenceDate", typ: Date },
        { json: "Memo", js: "Memo", typ: r("Memo") },
        { json: "Reference", js: "Reference", typ: u(null, "") },
        { json: "Reference2", js: "Reference2", typ: u(null, "") },
        { json: "TransactionCode", js: "TransactionCode", typ: null },
        { json: "ProjectCode", js: "ProjectCode", typ: null },
        { json: "TaxDate", js: "TaxDate", typ: Date },
        { json: "JdtNum", js: "JdtNum", typ: 0 },
        { json: "Indicator", js: "Indicator", typ: null },
        { json: "UseAutoStorno", js: "UseAutoStorno", typ: r("AdjustTransaction") },
        { json: "StornoDate", js: "StornoDate", typ: null },
        { json: "VatDate", js: "VatDate", typ: null },
        { json: "Series", js: "Series", typ: 0 },
        { json: "StampTax", js: "StampTax", typ: r("AdjustTransaction") },
        { json: "DueDate", js: "DueDate", typ: Date },
        { json: "AutoVAT", js: "AutoVAT", typ: r("AdjustTransaction") },
        { json: "Number", js: "Number", typ: 0 },
        { json: "FolioNumber", js: "FolioNumber", typ: null },
        { json: "FolioPrefixString", js: "FolioPrefixString", typ: null },
        { json: "ReportEU", js: "ReportEU", typ: r("AdjustTransaction") },
        { json: "Report347", js: "Report347", typ: r("AdjustTransaction") },
        { json: "Printed", js: "Printed", typ: r("Printed") },
        { json: "LocationCode", js: "LocationCode", typ: null },
        { json: "OriginalJournal", js: "OriginalJournal", typ: r("OriginalJournal") },
        { json: "Original", js: "Original", typ: 0 },
        { json: "BaseReference", js: "BaseReference", typ: "" },
        { json: "BlockDunningLetter", js: "BlockDunningLetter", typ: r("AdjustTransaction") },
        { json: "AutomaticWT", js: "AutomaticWT", typ: r("AdjustTransaction") },
        { json: "WTSum", js: "WTSum", typ: 0 },
        { json: "WTSumSC", js: "WTSumSC", typ: 0 },
        { json: "WTSumFC", js: "WTSumFC", typ: 0 },
        { json: "SignatureInputMessage", js: "SignatureInputMessage", typ: null },
        { json: "SignatureDigest", js: "SignatureDigest", typ: null },
        { json: "CertificationNumber", js: "CertificationNumber", typ: null },
        { json: "PrivateKeyVersion", js: "PrivateKeyVersion", typ: null },
        { json: "Corisptivi", js: "Corisptivi", typ: r("AdjustTransaction") },
        { json: "Reference3", js: "Reference3", typ: null },
        { json: "DocumentType", js: "DocumentType", typ: null },
        { json: "DeferredTax", js: "DeferredTax", typ: r("AdjustTransaction") },
        { json: "BlanketAgreementNumber", js: "BlanketAgreementNumber", typ: null },
        { json: "OperationCode", js: "OperationCode", typ: null },
        { json: "ResidenceNumberType", js: "ResidenceNumberType", typ: r("ResidenceNumberType") },
        { json: "ECDPostingType", js: "ECDPostingType", typ: r("ECDPostingType") },
        { json: "ExposedTransNumber", js: "ExposedTransNumber", typ: null },
        { json: "PointOfIssueCode", js: "PointOfIssueCode", typ: null },
        { json: "Letter", js: "Letter", typ: null },
        { json: "FolioNumberFrom", js: "FolioNumberFrom", typ: null },
        { json: "FolioNumberTo", js: "FolioNumberTo", typ: null },
        { json: "IsCostCenterTransfer", js: "IsCostCenterTransfer", typ: r("AdjustTransaction") },
        { json: "ReportingSectionControlStatementVAT", js: "ReportingSectionControlStatementVAT", typ: null },
        { json: "ExcludeFromTaxReportControlStatementVAT", js: "ExcludeFromTaxReportControlStatementVAT", typ: r("AdjustTransaction") },
        { json: "SAPPassport", js: "SAPPassport", typ: null },
        { json: "Cig", js: "Cig", typ: null },
        { json: "Cup", js: "Cup", typ: null },
        { json: "AdjustTransaction", js: "AdjustTransaction", typ: r("AdjustTransaction") },
        { json: "AttachmentEntry", js: "AttachmentEntry", typ: null },
        { json: "SAFTTransactionType", js: "SAFTTransactionType", typ: r("SAFTTransactionType") },
        { json: "JournalEntryLines", js: "JournalEntryLines", typ: a(r("JournalEntryLine")) },
        { json: "WithholdingTaxDataCollection", js: "WithholdingTaxDataCollection", typ: a("any") },
        { json: "ElectronicProtocols", js: "ElectronicProtocols", typ: a("any") },
    ], false),
    "JournalEntryLine": o([
        { json: "Line_ID", js: "Line_ID", typ: 0 },
        { json: "AccountCode", js: "AccountCode", typ: "" },
        { json: "Debit", js: "Debit", typ: 3.14 },
        { json: "Credit", js: "Credit", typ: 3.14 },
        { json: "FCDebit", js: "FCDebit", typ: 0 },
        { json: "FCCredit", js: "FCCredit", typ: 0 },
        { json: "FCCurrency", js: "FCCurrency", typ: null },
        { json: "DueDate", js: "DueDate", typ: Date },
        { json: "ShortName", js: "ShortName", typ: "" },
        { json: "ContraAccount", js: "ContraAccount", typ: "" },
        { json: "LineMemo", js: "LineMemo", typ: r("Memo") },
        { json: "ReferenceDate1", js: "ReferenceDate1", typ: Date },
        { json: "ReferenceDate2", js: "ReferenceDate2", typ: null },
        { json: "Reference1", js: "Reference1", typ: "" },
        { json: "Reference2", js: "Reference2", typ: "" },
        { json: "ProjectCode", js: "ProjectCode", typ: null },
        { json: "CostingCode", js: "CostingCode", typ: null },
        { json: "TaxDate", js: "TaxDate", typ: Date },
        { json: "BaseSum", js: "BaseSum", typ: 0 },
        { json: "TaxGroup", js: "TaxGroup", typ: null },
        { json: "DebitSys", js: "DebitSys", typ: 3.14 },
        { json: "CreditSys", js: "CreditSys", typ: 3.14 },
        { json: "VatDate", js: "VatDate", typ: null },
        { json: "VatLine", js: "VatLine", typ: r("AdjustTransaction") },
        { json: "SystemBaseAmount", js: "SystemBaseAmount", typ: 0 },
        { json: "VatAmount", js: "VatAmount", typ: 0 },
        { json: "SystemVatAmount", js: "SystemVatAmount", typ: 0 },
        { json: "GrossValue", js: "GrossValue", typ: 0 },
        { json: "AdditionalReference", js: "AdditionalReference", typ: null },
        { json: "CheckAbs", js: "CheckAbs", typ: null },
        { json: "CostingCode2", js: "CostingCode2", typ: null },
        { json: "CostingCode3", js: "CostingCode3", typ: null },
        { json: "CostingCode4", js: "CostingCode4", typ: null },
        { json: "TaxCode", js: "TaxCode", typ: null },
        { json: "TaxPostAccount", js: "TaxPostAccount", typ: r("TaxPostAccount") },
        { json: "CostingCode5", js: "CostingCode5", typ: null },
        { json: "LocationCode", js: "LocationCode", typ: null },
        { json: "ControlAccount", js: "ControlAccount", typ: "" },
        { json: "EqualizationTaxAmount", js: "EqualizationTaxAmount", typ: 0 },
        { json: "SystemEqualizationTaxAmount", js: "SystemEqualizationTaxAmount", typ: 0 },
        { json: "TotalTax", js: "TotalTax", typ: 0 },
        { json: "SystemTotalTax", js: "SystemTotalTax", typ: 0 },
        { json: "WTLiable", js: "WTLiable", typ: r("AdjustTransaction") },
        { json: "WTRow", js: "WTRow", typ: r("AdjustTransaction") },
        { json: "PaymentBlock", js: "PaymentBlock", typ: r("AdjustTransaction") },
        { json: "BlockReason", js: "BlockReason", typ: null },
        { json: "FederalTaxID", js: "FederalTaxID", typ: null },
        { json: "BPLID", js: "BPLID", typ: null },
        { json: "BPLName", js: "BPLName", typ: null },
        { json: "VATRegNum", js: "VATRegNum", typ: null },
        { json: "PaymentOrdered", js: "PaymentOrdered", typ: r("AdjustTransaction") },
        { json: "ExposedTransNumber", js: "ExposedTransNumber", typ: null },
        { json: "DocumentArray", js: "DocumentArray", typ: null },
        { json: "DocumentLine", js: "DocumentLine", typ: null },
        { json: "CostElementCode", js: "CostElementCode", typ: null },
        { json: "Cig", js: "Cig", typ: null },
        { json: "Cup", js: "Cup", typ: null },
        { json: "IncomeClassificationCategory", js: "IncomeClassificationCategory", typ: null },
        { json: "IncomeClassificationType", js: "IncomeClassificationType", typ: null },
        { json: "ExpensesClassificationCategory", js: "ExpensesClassificationCategory", typ: null },
        { json: "ExpensesClassificationType", js: "ExpensesClassificationType", typ: null },
        { json: "VATClassificationCategory", js: "VATClassificationCategory", typ: null },
        { json: "VATClassificationType", js: "VATClassificationType", typ: null },
        { json: "VATExemptionCause", js: "VATExemptionCause", typ: null },
        { json: "CashFlowAssignments", js: "CashFlowAssignments", typ: a("any") },
    ], false),
    "OriginalJournal": [
        "ttInventoryOpeningBalance",
        "ttOpeningBalance",
    ],
    "AdjustTransaction": [
        "tNO",
    ],
    "ECDPostingType": [
        "ecdNormal",
    ],
    "Memo": [
        "",
        "G/L Accounts Opening Balance",
    ],
    "TaxPostAccount": [
        "tpa_Default",
    ],
    "Printed": [
        "psNo",
    ],
    "ResidenceNumberType": [
        "rntSpanishFiscalID",
    ],
    "SAFTTransactionType": [
        "safttt_Default",
    ],
};