export interface Vendor {
    FederalTaxID: string;
  
    status:   number;
    software: string;
    data:     Datum[];
}

export interface Datum {
    id:             string;
    firstName:      string;
    identification: null;
    FederalTaxID:   string;
    email:          null | string;
    phone:          null | string;
    sap:            Sap;
}

export interface Sap {
    "odata.etag":                               string;
    CardCode:                                   string;
    CardName:                                   string;
    CardType:                                   CardType;
    GroupCode:                                  number;
    Address:                                    null | string;
    ZipCode:                                    null | string;
    MailAddress:                                null | string;
    MailZipCode:                                null | string;
    Phone1:                                     null | string;
    Phone2:                                     null;
    Fax:                                        null | string;
    ContactPerson:                              null | string;
    Notes:                                      null;
    PayTermsGrpCode:                            number;
    CreditLimit:                                number;
    MaxCommitment:                              number;
    DiscountPercent:                            number;
    VatLiable:                                  VatLiable;
    FederalTaxID:                               string;
    DeductibleAtSource:                         AcceptsEndorsedChecks;
    DeductionPercent:                           number;
    DeductionValidUntil:                        null;
    PriceListNum:                               number;
    IntrestRatePercent:                         number;
    CommissionPercent:                          number;
    CommissionGroupCode:                        number;
    FreeText:                                   null;
    SalesPersonCode:                            number;
    Currency:                                   Currency;
    RateDiffAccount:                            null | string;
    Cellular:                                   null;
    AvarageLate:                                null;
    City:                                       BillToState | null;
    County:                                     null;
    Country:                                    Country;
    MailCity:                                   BillToState | null;
    MailCounty:                                 null;
    MailCountry:                                Country | null;
    EmailAddress:                               null | string;
    Picture:                                    null;
    DefaultAccount:                             null | string;
    DefaultBranch:                              null | string;
    DefaultBankCode:                            string;
    AdditionalID:                               null;
    Pager:                                      null;
    FatherCard:                                 null;
    CardForeignName:                            null;
    FatherType:                                 FatherType;
    DeductionOffice:                            null;
    ExportCode:                                 null;
    MinIntrest:                                 number;
    CurrentAccountBalance:                      number;
    OpenDeliveryNotesBalance:                   number;
    OpenOrdersBalance:                          number;
    OpenChecksBalance:                          number;
    VatGroup:                                   null;
    ShippingType:                               number | null;
    Password:                                   null;
    Indicator:                                  null;
    IBAN:                                       null;
    CreditCardCode:                             number;
    CreditCardNum:                              string;
    CreditCardExpiration:                       Date | null;
    DebitorAccount:                             string;
    OpenOpportunities:                          number | null;
    Valid:                                      BackOrder;
    ValidFrom:                                  null;
    ValidTo:                                    null;
    ValidRemarks:                               null;
    Frozen:                                     AcceptsEndorsedChecks;
    FrozenFrom:                                 null;
    FrozenTo:                                   null;
    FrozenRemarks:                              null;
    Block:                                      null | string;
    BillToState:                                BillToState | null;
    ShipToState:                                BillToState | null;
    ExemptNum:                                  null;
    Priority:                                   number;
    FormCode1099:                               null;
    Box1099:                                    null;
    PeymentMethodCode:                          YmentMethodCode | null;
    BackOrder:                                  BackOrder;
    PartialDelivery:                            BackOrder;
    BlockDunning:                               AcceptsEndorsedChecks;
    BankCountry:                                Country;
    HouseBank:                                  string;
    HouseBankCountry:                           Country;
    HouseBankAccount:                           string;
    ShipToDefault:                              null | string;
    DunningLevel:                               number | null;
    DunningDate:                                null;
    CollectionAuthorization:                    AcceptsEndorsedChecks;
    DME:                                        null;
    InstructionKey:                             null;
    SinglePayment:                              AcceptsEndorsedChecks;
    ISRBillerID:                                null;
    PaymentBlock:                               AcceptsEndorsedChecks;
    ReferenceDetails:                           null;
    HouseBankBranch:                            HouseBankBranch;
    OwnerIDNumber:                              null | string;
    PaymentBlockDescription:                    number;
    TaxExemptionLetterNum:                      null;
    MaxAmountOfExemption:                       number;
    ExemptionValidityDateFrom:                  null;
    ExemptionValidityDateTo:                    null;
    LinkedBusinessPartner:                      null;
    LastMultiReconciliationNum:                 null;
    DeferredTax:                                BackOrder;
    Equalization:                               AcceptsEndorsedChecks;
    SubjectToWithholdingTax:                    SubjectToWithholdingTax;
    CertificateNumber:                          null | string;
    ExpirationDate:                             null;
    NationalInsuranceNum:                       null | string;
    AccrualCriteria:                            AcceptsEndorsedChecks;
    WTCode:                                     null | string;
    BillToBuildingFloorRoom:                    null;
    DownPaymentClearAct:                        null | string;
    ChannelBP:                                  null;
    DefaultTechnician:                          null;
    BilltoDefault:                              BilltoDefault | null;
    CustomerBillofExchangDisc:                  null;
    Territory:                                  null;
    ShipToBuildingFloorRoom:                    null;
    CustomerBillofExchangPres:                  null;
    ProjectCode:                                null;
    VatGroupLatinAmerica:                       null | string;
    DunningTerm:                                DunningTerm | null;
    Website:                                    null | string;
    OtherReceivablePayable:                     null;
    BillofExchangeonCollection:                 null;
    CompanyPrivate:                             CompanyPrivate;
    LanguageCode:                               number;
    UnpaidBillofExchange:                       null;
    WithholdingTaxDeductionGroup:               number;
    ClosingDateProcedureNumber:                 null;
    Profession:                                 null;
    BankChargesAllocationCode:                  null;
    TaxRoundingRule:                            TaxRoundingRule;
    Properties1:                                AcceptsEndorsedChecks;
    Properties2:                                AcceptsEndorsedChecks;
    Properties3:                                AcceptsEndorsedChecks;
    Properties4:                                AcceptsEndorsedChecks;
    Properties5:                                AcceptsEndorsedChecks;
    Properties6:                                AcceptsEndorsedChecks;
    Properties7:                                AcceptsEndorsedChecks;
    Properties8:                                AcceptsEndorsedChecks;
    Properties9:                                AcceptsEndorsedChecks;
    Properties10:                               AcceptsEndorsedChecks;
    Properties11:                               AcceptsEndorsedChecks;
    Properties12:                               AcceptsEndorsedChecks;
    Properties13:                               AcceptsEndorsedChecks;
    Properties14:                               AcceptsEndorsedChecks;
    Properties15:                               AcceptsEndorsedChecks;
    Properties16:                               AcceptsEndorsedChecks;
    Properties17:                               AcceptsEndorsedChecks;
    Properties18:                               AcceptsEndorsedChecks;
    Properties19:                               AcceptsEndorsedChecks;
    Properties20:                               AcceptsEndorsedChecks;
    Properties21:                               AcceptsEndorsedChecks;
    Properties22:                               AcceptsEndorsedChecks;
    Properties23:                               AcceptsEndorsedChecks;
    Properties24:                               AcceptsEndorsedChecks;
    Properties25:                               AcceptsEndorsedChecks;
    Properties26:                               AcceptsEndorsedChecks;
    Properties27:                               AcceptsEndorsedChecks;
    Properties28:                               AcceptsEndorsedChecks;
    Properties29:                               AcceptsEndorsedChecks;
    Properties30:                               AcceptsEndorsedChecks;
    Properties31:                               AcceptsEndorsedChecks;
    Properties32:                               AcceptsEndorsedChecks;
    Properties33:                               AcceptsEndorsedChecks;
    Properties34:                               AcceptsEndorsedChecks;
    Properties35:                               AcceptsEndorsedChecks;
    Properties36:                               AcceptsEndorsedChecks;
    Properties37:                               AcceptsEndorsedChecks;
    Properties38:                               AcceptsEndorsedChecks;
    Properties39:                               AcceptsEndorsedChecks;
    Properties40:                               AcceptsEndorsedChecks;
    Properties41:                               AcceptsEndorsedChecks;
    Properties42:                               AcceptsEndorsedChecks;
    Properties43:                               AcceptsEndorsedChecks;
    Properties44:                               AcceptsEndorsedChecks;
    Properties45:                               AcceptsEndorsedChecks;
    Properties46:                               AcceptsEndorsedChecks;
    Properties47:                               AcceptsEndorsedChecks;
    Properties48:                               AcceptsEndorsedChecks;
    Properties49:                               AcceptsEndorsedChecks;
    Properties50:                               AcceptsEndorsedChecks;
    Properties51:                               AcceptsEndorsedChecks;
    Properties52:                               AcceptsEndorsedChecks;
    Properties53:                               AcceptsEndorsedChecks;
    Properties54:                               AcceptsEndorsedChecks;
    Properties55:                               AcceptsEndorsedChecks;
    Properties56:                               AcceptsEndorsedChecks;
    Properties57:                               AcceptsEndorsedChecks;
    Properties58:                               AcceptsEndorsedChecks;
    Properties59:                               AcceptsEndorsedChecks;
    Properties60:                               AcceptsEndorsedChecks;
    Properties61:                               AcceptsEndorsedChecks;
    Properties62:                               AcceptsEndorsedChecks;
    Properties63:                               AcceptsEndorsedChecks;
    Properties64:                               AcceptsEndorsedChecks;
    CompanyRegistrationNumber:                  null;
    VerificationNumber:                         null;
    DiscountBaseObject:                         DiscountBaseObject;
    DiscountRelations:                          DiscountRelations;
    TypeReport:                                 TypeReport;
    ThresholdOverlook:                          AcceptsEndorsedChecks;
    SurchargeOverlook:                          AcceptsEndorsedChecks;
    Remark1:                                    null;
    ConCerti:                                   null;
    DownPaymentInterimAccount:                  null;
    OperationCode347:                           OperationCode347;
    InsuranceOperation347:                      AcceptsEndorsedChecks;
    HierarchicalDeduction:                      AcceptsEndorsedChecks;
    ShaamGroup:                                 ShaamGroup;
    WithholdingTaxCertified:                    AcceptsEndorsedChecks;
    BookkeepingCertified:                       AcceptsEndorsedChecks;
    PlanningGroup:                              null;
    Affiliate:                                  AcceptsEndorsedChecks;
    Industry:                                   null;
    VatIDNum:                                   null;
    DatevAccount:                               null;
    DatevFirstDataEntry:                        BackOrder;
    UseShippedGoodsAccount:                     AcceptsEndorsedChecks;
    GTSRegNo:                                   null;
    GTSBankAccountNo:                           null;
    GTSBillingAddrTel:                          null;
    ETaxWebSite:                                null;
    HouseBankIBAN:                              null;
    VATRegistrationNumber:                      null;
    RepresentativeName:                         null;
    IndustryType:                               null;
    BusinessType:                               null;
    Series:                                     number;
    AutomaticPosting:                           AutomaticPosting | null;
    InterestAccount:                            null;
    FeeAccount:                                 null;
    CampaignNumber:                             null;
    AliasName:                                  null;
    DefaultBlanketAgreementNumber:              null;
    EffectiveDiscount:                          DiscountRelations;
    NoDiscounts:                                AcceptsEndorsedChecks;
    EffectivePrice:                             EffectivePrice;
    EffectivePriceConsidersPriceBeforeDiscount: AcceptsEndorsedChecks;
    GlobalLocationNumber:                       null;
    EDISenderID:                                null;
    EDIRecipientID:                             null;
    ResidenNumber:                              ResidenNumber;
    RelationshipCode:                           null;
    RelationshipDateFrom:                       null;
    RelationshipDateTill:                       null;
    UnifiedFederalTaxID:                        null;
    AttachmentEntry:                            null;
    TypeOfOperation:                            null | string;
    EndorsableChecksFromBP:                     BackOrder;
    AcceptsEndorsedChecks:                      AcceptsEndorsedChecks;
    OwnerCode:                                  number | null;
    BlockSendingMarketingContent:               AcceptsEndorsedChecks;
    AgentCode:                                  null;
    PriceMode:                                  null;
    EDocGenerationType:                         null;
    EDocStreet:                                 null;
    EDocStreetNumber:                           null;
    EDocBuildingNumber:                         null;
    EDocZipCode:                                null;
    EDocCity:                                   null;
    EDocCountry:                                null;
    EDocDistrict:                               null;
    EDocRepresentativeFirstName:                null;
    EDocRepresentativeSurname:                  null;
    EDocRepresentativeCompany:                  null;
    EDocRepresentativeFiscalCode:               null;
    EDocRepresentativeAdditionalId:             null;
    EDocPECAddress:                             null;
    IPACodeForPA:                               null;
    UpdateDate:                                 Date | null;
    UpdateTime:                                 null | string;
    ExemptionMaxAmountValidationType:           ExemptionMaxAmountValidationType;
    ECommerceMerchantID:                        null;
    UseBillToAddrToDetermineTax:                AcceptsEndorsedChecks;
    CreateDate:                                 Date;
    CreateTime:                                 string;
    DefaultTransporterEntry:                    null;
    DefaultTransporterLineNumber:               null;
    FCERelevant:                                AcceptsEndorsedChecks;
    FCEValidateBaseDelivery:                    AcceptsEndorsedChecks;
    MainUsage:                                  null;
    EBooksVATExemptionCause:                    null;
    LegalText:                                  null;
    DataVersion:                                number;
    ExchangeRateForIncomingPayment:             BackOrder;
    ExchangeRateForOutgoingPayment:             BackOrder;
    CertificateDetails:                         null;
    DefaultCurrency:                            Currency | null;
    EORINumber:                                 null;
    FCEAsPaymentMeans:                          AcceptsEndorsedChecks;
    NotRelevantForMonthlyInvoice:               AcceptsEndorsedChecks;
    U_B1SYS_MainUsage:                          null;
    U_B1SYS_FiscRegime:                         null;
    U_B1SYS_SubjToTax:                          null | string;
    ElectronicProtocols:                        any[];
    BPAddresses:                                BPAddress[];
    ContactEmployees:                           ContactEmployee[];
    BPAccountReceivablePaybleCollection:        any[];
    BPPaymentMethods:                           BPPaymentMethod[];
    BPWithholdingTaxCollection:                 any[];
    BPPaymentDates:                             any[];
    BPBranchAssignment:                         any[];
    BPBankAccounts:                             BPBankAccount[];
    BPFiscalTaxIDCollection:                    any[];
    DiscountGroups:                             any[];
    BPIntrastatExtension:                       BPIntrastatExtension;
    BPBlockSendingMarketingContents:            any[];
    BPCurrenciesCollection:                     BPCurrenciesCollection[];
}

export enum AcceptsEndorsedChecks {
    TNO = "tNO",
}

export enum AutomaticPosting {
    ApNo = "apNo",
}

export interface BPAddress {
    AddressName:          string;
    Street:               null | string;
    Block:                null | string;
    ZipCode:              null | string;
    City:                 BillToState | null;
    County:               null;
    Country:              Country;
    State:                BillToState | null;
    FederalTaxID:         null | string;
    TaxCode:              TaxCode | null;
    BuildingFloorRoom:    null | string;
    AddressType:          AddressType;
    AddressName2:         null;
    AddressName3:         null;
    TypeOfAddress:        null;
    StreetNo:             null;
    BPCode:               string;
    RowNum:               number;
    GlobalLocationNumber: null;
    Nationality:          null;
    TaxOffice:            null;
    GSTIN:                null;
    GstType:              null;
    CreateDate:           Date;
    CreateTime:           string;
    MYFType:              null;
    TaasEnabled:          BackOrder;
}

export enum AddressType {
    BoBillTo = "bo_BillTo",
    BoShipTo = "bo_ShipTo",
}

export enum BillToState {
    Bratislava = "Bratislava",
    Df = "DF",
    Manchester = "Manchester",
    MexicoDF = "Mexico D.F.",
    Montreal = "Montreal",
    Toronto = "Toronto",
}

export enum Country {
    CA = "CA",
    GB = "GB",
    MX = "MX",
    Sk = "SK",
}

export enum BackOrder {
    TYES = "tYES",
}

export enum TaxCode {
    B16 = "B16",
    B2 = "B2",
    Empty = "",
}

export interface BPBankAccount {
    LogInstance:          number;
    UserNo4:              null;
    BPCode:               string;
    County:               null;
    State:                null;
    UserNo2:              null;
    IBAN:                 null;
    ZipCode:              null;
    City:                 BillToState | null;
    Block:                null;
    Branch:               null | string;
    Country:              Country;
    Street:               null;
    ControlKey:           null;
    UserNo3:              null;
    BankCode:             string;
    AccountNo:            string;
    UserNo1:              null;
    InternalKey:          number;
    BuildingFloorRoom:    null;
    BIK:                  null;
    AccountName:          null;
    CorrespondentAccount: null;
    Phone:                null;
    Fax:                  null;
    CustomerIdNumber:     string;
    ISRBillerID:          null;
    ISRType:              number;
    BICSwiftCode:         null;
    ABARoutingNumber:     null;
    MandateID:            null;
    SignatureDate:        null;
    MandateExpDate:       null;
    SEPASeqType:          null;
}

export interface BPCurrenciesCollection {
    CurrencyCode: string;
    Include:      BackOrder;
}

export interface BPIntrastatExtension {
    CardCode?:             string;
    TransportMode?:        null;
    Incoterms?:            null;
    NatureOfTransactions?: null;
    StatisticalProcedure?: null;
    CustomsProcedure?:     null;
    PortOfEntryOrExit?:    null;
    DomesticOrForeignID?:  null;
    IntrastatRelevant?:    AcceptsEndorsedChecks;
}

export interface BPPaymentMethod {
    PaymentMethodCode: YmentMethodCode;
    RowNumber:         number;
    BPCode:            string;
}

export enum YmentMethodCode {
    INCTransfer = "INC_Transfer",
    OUTCheque = "OUT_Cheque",
    OUTTransfer = "OUT_Transfer",
}

export enum BilltoDefault {
    BillTo = "Bill to",
    DeFacturacion = "de Facturacion",
    DePago = "de Pago",
    Imp = "IMP",
}

export enum CardType {
    CCustomer = "cCustomer",
    CLid = "cLid",
    CSupplier = "cSupplier",
}

export enum CompanyPrivate {
    CCompany = "cCompany",
    CEmployee = "cEmployee",
    CPrivate = "cPrivate",
}

export interface ContactEmployee {
    CardCode:                                     string;
    Name:                                         string;
    Position:                                     string;
    Address:                                      string;
    Phone1:                                       string;
    Phone2:                                       null;
    MobilePhone:                                  null | string;
    Fax:                                          string;
    E_Mail:                                       string;
    Pager:                                        null;
    Remarks1:                                     null;
    Remarks2:                                     null;
    Password:                                     null;
    InternalCode:                                 number;
    PlaceOfBirth:                                 null;
    DateOfBirth:                                  null;
    Gender:                                       Gender;
    Profession:                                   null;
    Title:                                        Title;
    CityOfBirth:                                  null;
    Active:                                       BackOrder;
    FirstName:                                    null | string;
    MiddleName:                                   null;
    LastName:                                     null | string;
    EmailGroupCode:                               null;
    BlockSendingMarketingContent:                 AcceptsEndorsedChecks;
    CreateDate:                                   Date;
    CreateTime:                                   string;
    UpdateDate:                                   Date;
    UpdateTime:                                   string;
    ConnectedAddressName:                         null;
    ConnectedAddressType:                         null;
    ForeignCountry:                               null;
    ContactEmployeeBlockSendingMarketingContents: any[];
}

export enum Gender {
    GtUndefined = "gt_Undefined",
}

export enum Title {
    Mr = "Mr.",
    Mrs = "Mrs.",
    Sr = "Sr.",
    Sra = "Sra.",
    Srta = "Srta.",
}

export enum Currency {
    Empty = "##",
    Eur = "EUR",
    Mxp = "MXP",
    Usd = "USD",
}

export enum DiscountBaseObject {
    DgboNone = "dgboNone",
}

export enum DiscountRelations {
    DgrLowestDiscount = "dgrLowestDiscount",
}

export enum DunningTerm {
    Empty = "",
    Estandar = "Estandar",
}

export enum EffectivePrice {
    EpDefaultPriority = "epDefaultPriority",
}

export enum ExemptionMaxAmountValidationType {
    EmaIndividual = "emaIndividual",
}

export enum FatherType {
    CPaymentsSum = "cPayments_sum",
}

export enum HouseBankBranch {
    Sucursal1 = "Sucursal 1",
}

export enum OperationCode347 {
    OcGoodsOrServiciesAcquisitions = "ocGoodsOrServiciesAcquisitions",
    OcSalesOrServicesRevenues = "ocSalesOrServicesRevenues",
}

export enum ResidenNumber {
    RntSpanishFiscalID = "rntSpanishFiscalID",
}

export enum ShaamGroup {
    SgServicesAndAsset = "sgServicesAndAsset",
}

export enum SubjectToWithholdingTax {
    BoNO = "boNO",
    BoYES = "boYES",
}

export enum TaxRoundingRule {
    TrrCompanyDefault = "trr_CompanyDefault",
}

export enum TypeReport {
    AtCompany = "atCompany",
}

export enum VatLiable {
    VExempted = "vExempted",
    VLiable = "vLiable",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toVendor(json: string): Vendor {
        return cast(JSON.parse(json), r("Vendor"));
    }

    public static vendorToJson(value: Vendor): string {
        return JSON.stringify(uncast(value, r("Vendor")), null, 2);
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
    "Vendor": o([
        { json: "status", js: "status", typ: 0 },
        { json: "software", js: "software", typ: "" },
        { json: "data", js: "data", typ: a(r("Datum")) },
    ], false),
    "Datum": o([
        { json: "id", js: "id", typ: "" },
        { json: "firstName", js: "firstName", typ: "" },
        { json: "identification", js: "identification", typ: null },
        { json: "FederalTaxID", js: "FederalTaxID", typ: "" },
        { json: "email", js: "email", typ: u(null, "") },
        { json: "phone", js: "phone", typ: u(null, "") },
        { json: "sap", js: "sap", typ: r("Sap") },
    ], false),
    "Sap": o([
        { json: "odata.etag", js: "odata.etag", typ: "" },
        { json: "CardCode", js: "CardCode", typ: "" },
        { json: "CardName", js: "CardName", typ: "" },
        { json: "CardType", js: "CardType", typ: r("CardType") },
        { json: "GroupCode", js: "GroupCode", typ: 0 },
        { json: "Address", js: "Address", typ: u(null, "") },
        { json: "ZipCode", js: "ZipCode", typ: u(null, "") },
        { json: "MailAddress", js: "MailAddress", typ: u(null, "") },
        { json: "MailZipCode", js: "MailZipCode", typ: u(null, "") },
        { json: "Phone1", js: "Phone1", typ: u(null, "") },
        { json: "Phone2", js: "Phone2", typ: null },
        { json: "Fax", js: "Fax", typ: u(null, "") },
        { json: "ContactPerson", js: "ContactPerson", typ: u(null, "") },
        { json: "Notes", js: "Notes", typ: null },
        { json: "PayTermsGrpCode", js: "PayTermsGrpCode", typ: 0 },
        { json: "CreditLimit", js: "CreditLimit", typ: 0 },
        { json: "MaxCommitment", js: "MaxCommitment", typ: 0 },
        { json: "DiscountPercent", js: "DiscountPercent", typ: 0 },
        { json: "VatLiable", js: "VatLiable", typ: r("VatLiable") },
        { json: "FederalTaxID", js: "FederalTaxID", typ: "" },
        { json: "DeductibleAtSource", js: "DeductibleAtSource", typ: r("AcceptsEndorsedChecks") },
        { json: "DeductionPercent", js: "DeductionPercent", typ: 0 },
        { json: "DeductionValidUntil", js: "DeductionValidUntil", typ: null },
        { json: "PriceListNum", js: "PriceListNum", typ: 0 },
        { json: "IntrestRatePercent", js: "IntrestRatePercent", typ: 0 },
        { json: "CommissionPercent", js: "CommissionPercent", typ: 0 },
        { json: "CommissionGroupCode", js: "CommissionGroupCode", typ: 0 },
        { json: "FreeText", js: "FreeText", typ: null },
        { json: "SalesPersonCode", js: "SalesPersonCode", typ: 0 },
        { json: "Currency", js: "Currency", typ: r("Currency") },
        { json: "RateDiffAccount", js: "RateDiffAccount", typ: u(null, "") },
        { json: "Cellular", js: "Cellular", typ: null },
        { json: "AvarageLate", js: "AvarageLate", typ: null },
        { json: "City", js: "City", typ: u(r("BillToState"), null) },
        { json: "County", js: "County", typ: null },
        { json: "Country", js: "Country", typ: r("Country") },
        { json: "MailCity", js: "MailCity", typ: u(r("BillToState"), null) },
        { json: "MailCounty", js: "MailCounty", typ: null },
        { json: "MailCountry", js: "MailCountry", typ: u(r("Country"), null) },
        { json: "EmailAddress", js: "EmailAddress", typ: u(null, "") },
        { json: "Picture", js: "Picture", typ: null },
        { json: "DefaultAccount", js: "DefaultAccount", typ: u(null, "") },
        { json: "DefaultBranch", js: "DefaultBranch", typ: u(null, "") },
        { json: "DefaultBankCode", js: "DefaultBankCode", typ: "" },
        { json: "AdditionalID", js: "AdditionalID", typ: null },
        { json: "Pager", js: "Pager", typ: null },
        { json: "FatherCard", js: "FatherCard", typ: null },
        { json: "CardForeignName", js: "CardForeignName", typ: null },
        { json: "FatherType", js: "FatherType", typ: r("FatherType") },
        { json: "DeductionOffice", js: "DeductionOffice", typ: null },
        { json: "ExportCode", js: "ExportCode", typ: null },
        { json: "MinIntrest", js: "MinIntrest", typ: 0 },
        { json: "CurrentAccountBalance", js: "CurrentAccountBalance", typ: 3.14 },
        { json: "OpenDeliveryNotesBalance", js: "OpenDeliveryNotesBalance", typ: 3.14 },
        { json: "OpenOrdersBalance", js: "OpenOrdersBalance", typ: 3.14 },
        { json: "OpenChecksBalance", js: "OpenChecksBalance", typ: 3.14 },
        { json: "VatGroup", js: "VatGroup", typ: null },
        { json: "ShippingType", js: "ShippingType", typ: u(0, null) },
        { json: "Password", js: "Password", typ: null },
        { json: "Indicator", js: "Indicator", typ: null },
        { json: "IBAN", js: "IBAN", typ: null },
        { json: "CreditCardCode", js: "CreditCardCode", typ: 0 },
        { json: "CreditCardNum", js: "CreditCardNum", typ: "" },
        { json: "CreditCardExpiration", js: "CreditCardExpiration", typ: u(Date, null) },
        { json: "DebitorAccount", js: "DebitorAccount", typ: "" },
        { json: "OpenOpportunities", js: "OpenOpportunities", typ: u(0, null) },
        { json: "Valid", js: "Valid", typ: r("BackOrder") },
        { json: "ValidFrom", js: "ValidFrom", typ: null },
        { json: "ValidTo", js: "ValidTo", typ: null },
        { json: "ValidRemarks", js: "ValidRemarks", typ: null },
        { json: "Frozen", js: "Frozen", typ: r("AcceptsEndorsedChecks") },
        { json: "FrozenFrom", js: "FrozenFrom", typ: null },
        { json: "FrozenTo", js: "FrozenTo", typ: null },
        { json: "FrozenRemarks", js: "FrozenRemarks", typ: null },
        { json: "Block", js: "Block", typ: u(null, "") },
        { json: "BillToState", js: "BillToState", typ: u(r("BillToState"), null) },
        { json: "ShipToState", js: "ShipToState", typ: u(r("BillToState"), null) },
        { json: "ExemptNum", js: "ExemptNum", typ: null },
        { json: "Priority", js: "Priority", typ: 0 },
        { json: "FormCode1099", js: "FormCode1099", typ: null },
        { json: "Box1099", js: "Box1099", typ: null },
        { json: "PeymentMethodCode", js: "PeymentMethodCode", typ: u(r("YmentMethodCode"), null) },
        { json: "BackOrder", js: "BackOrder", typ: r("BackOrder") },
        { json: "PartialDelivery", js: "PartialDelivery", typ: r("BackOrder") },
        { json: "BlockDunning", js: "BlockDunning", typ: r("AcceptsEndorsedChecks") },
        { json: "BankCountry", js: "BankCountry", typ: r("Country") },
        { json: "HouseBank", js: "HouseBank", typ: "" },
        { json: "HouseBankCountry", js: "HouseBankCountry", typ: r("Country") },
        { json: "HouseBankAccount", js: "HouseBankAccount", typ: "" },
        { json: "ShipToDefault", js: "ShipToDefault", typ: u(null, "") },
        { json: "DunningLevel", js: "DunningLevel", typ: u(0, null) },
        { json: "DunningDate", js: "DunningDate", typ: null },
        { json: "CollectionAuthorization", js: "CollectionAuthorization", typ: r("AcceptsEndorsedChecks") },
        { json: "DME", js: "DME", typ: null },
        { json: "InstructionKey", js: "InstructionKey", typ: null },
        { json: "SinglePayment", js: "SinglePayment", typ: r("AcceptsEndorsedChecks") },
        { json: "ISRBillerID", js: "ISRBillerID", typ: null },
        { json: "PaymentBlock", js: "PaymentBlock", typ: r("AcceptsEndorsedChecks") },
        { json: "ReferenceDetails", js: "ReferenceDetails", typ: null },
        { json: "HouseBankBranch", js: "HouseBankBranch", typ: r("HouseBankBranch") },
        { json: "OwnerIDNumber", js: "OwnerIDNumber", typ: u(null, "") },
        { json: "PaymentBlockDescription", js: "PaymentBlockDescription", typ: 0 },
        { json: "TaxExemptionLetterNum", js: "TaxExemptionLetterNum", typ: null },
        { json: "MaxAmountOfExemption", js: "MaxAmountOfExemption", typ: 0 },
        { json: "ExemptionValidityDateFrom", js: "ExemptionValidityDateFrom", typ: null },
        { json: "ExemptionValidityDateTo", js: "ExemptionValidityDateTo", typ: null },
        { json: "LinkedBusinessPartner", js: "LinkedBusinessPartner", typ: null },
        { json: "LastMultiReconciliationNum", js: "LastMultiReconciliationNum", typ: null },
        { json: "DeferredTax", js: "DeferredTax", typ: r("BackOrder") },
        { json: "Equalization", js: "Equalization", typ: r("AcceptsEndorsedChecks") },
        { json: "SubjectToWithholdingTax", js: "SubjectToWithholdingTax", typ: r("SubjectToWithholdingTax") },
        { json: "CertificateNumber", js: "CertificateNumber", typ: u(null, "") },
        { json: "ExpirationDate", js: "ExpirationDate", typ: null },
        { json: "NationalInsuranceNum", js: "NationalInsuranceNum", typ: u(null, "") },
        { json: "AccrualCriteria", js: "AccrualCriteria", typ: r("AcceptsEndorsedChecks") },
        { json: "WTCode", js: "WTCode", typ: u(null, "") },
        { json: "BillToBuildingFloorRoom", js: "BillToBuildingFloorRoom", typ: null },
        { json: "DownPaymentClearAct", js: "DownPaymentClearAct", typ: u(null, "") },
        { json: "ChannelBP", js: "ChannelBP", typ: null },
        { json: "DefaultTechnician", js: "DefaultTechnician", typ: null },
        { json: "BilltoDefault", js: "BilltoDefault", typ: u(r("BilltoDefault"), null) },
        { json: "CustomerBillofExchangDisc", js: "CustomerBillofExchangDisc", typ: null },
        { json: "Territory", js: "Territory", typ: null },
        { json: "ShipToBuildingFloorRoom", js: "ShipToBuildingFloorRoom", typ: null },
        { json: "CustomerBillofExchangPres", js: "CustomerBillofExchangPres", typ: null },
        { json: "ProjectCode", js: "ProjectCode", typ: null },
        { json: "VatGroupLatinAmerica", js: "VatGroupLatinAmerica", typ: u(null, "") },
        { json: "DunningTerm", js: "DunningTerm", typ: u(r("DunningTerm"), null) },
        { json: "Website", js: "Website", typ: u(null, "") },
        { json: "OtherReceivablePayable", js: "OtherReceivablePayable", typ: null },
        { json: "BillofExchangeonCollection", js: "BillofExchangeonCollection", typ: null },
        { json: "CompanyPrivate", js: "CompanyPrivate", typ: r("CompanyPrivate") },
        { json: "LanguageCode", js: "LanguageCode", typ: 0 },
        { json: "UnpaidBillofExchange", js: "UnpaidBillofExchange", typ: null },
        { json: "WithholdingTaxDeductionGroup", js: "WithholdingTaxDeductionGroup", typ: 0 },
        { json: "ClosingDateProcedureNumber", js: "ClosingDateProcedureNumber", typ: null },
        { json: "Profession", js: "Profession", typ: null },
        { json: "BankChargesAllocationCode", js: "BankChargesAllocationCode", typ: null },
        { json: "TaxRoundingRule", js: "TaxRoundingRule", typ: r("TaxRoundingRule") },
        { json: "Properties1", js: "Properties1", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties2", js: "Properties2", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties3", js: "Properties3", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties4", js: "Properties4", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties5", js: "Properties5", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties6", js: "Properties6", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties7", js: "Properties7", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties8", js: "Properties8", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties9", js: "Properties9", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties10", js: "Properties10", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties11", js: "Properties11", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties12", js: "Properties12", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties13", js: "Properties13", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties14", js: "Properties14", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties15", js: "Properties15", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties16", js: "Properties16", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties17", js: "Properties17", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties18", js: "Properties18", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties19", js: "Properties19", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties20", js: "Properties20", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties21", js: "Properties21", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties22", js: "Properties22", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties23", js: "Properties23", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties24", js: "Properties24", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties25", js: "Properties25", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties26", js: "Properties26", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties27", js: "Properties27", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties28", js: "Properties28", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties29", js: "Properties29", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties30", js: "Properties30", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties31", js: "Properties31", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties32", js: "Properties32", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties33", js: "Properties33", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties34", js: "Properties34", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties35", js: "Properties35", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties36", js: "Properties36", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties37", js: "Properties37", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties38", js: "Properties38", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties39", js: "Properties39", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties40", js: "Properties40", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties41", js: "Properties41", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties42", js: "Properties42", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties43", js: "Properties43", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties44", js: "Properties44", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties45", js: "Properties45", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties46", js: "Properties46", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties47", js: "Properties47", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties48", js: "Properties48", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties49", js: "Properties49", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties50", js: "Properties50", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties51", js: "Properties51", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties52", js: "Properties52", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties53", js: "Properties53", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties54", js: "Properties54", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties55", js: "Properties55", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties56", js: "Properties56", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties57", js: "Properties57", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties58", js: "Properties58", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties59", js: "Properties59", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties60", js: "Properties60", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties61", js: "Properties61", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties62", js: "Properties62", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties63", js: "Properties63", typ: r("AcceptsEndorsedChecks") },
        { json: "Properties64", js: "Properties64", typ: r("AcceptsEndorsedChecks") },
        { json: "CompanyRegistrationNumber", js: "CompanyRegistrationNumber", typ: null },
        { json: "VerificationNumber", js: "VerificationNumber", typ: null },
        { json: "DiscountBaseObject", js: "DiscountBaseObject", typ: r("DiscountBaseObject") },
        { json: "DiscountRelations", js: "DiscountRelations", typ: r("DiscountRelations") },
        { json: "TypeReport", js: "TypeReport", typ: r("TypeReport") },
        { json: "ThresholdOverlook", js: "ThresholdOverlook", typ: r("AcceptsEndorsedChecks") },
        { json: "SurchargeOverlook", js: "SurchargeOverlook", typ: r("AcceptsEndorsedChecks") },
        { json: "Remark1", js: "Remark1", typ: null },
        { json: "ConCerti", js: "ConCerti", typ: null },
        { json: "DownPaymentInterimAccount", js: "DownPaymentInterimAccount", typ: null },
        { json: "OperationCode347", js: "OperationCode347", typ: r("OperationCode347") },
        { json: "InsuranceOperation347", js: "InsuranceOperation347", typ: r("AcceptsEndorsedChecks") },
        { json: "HierarchicalDeduction", js: "HierarchicalDeduction", typ: r("AcceptsEndorsedChecks") },
        { json: "ShaamGroup", js: "ShaamGroup", typ: r("ShaamGroup") },
        { json: "WithholdingTaxCertified", js: "WithholdingTaxCertified", typ: r("AcceptsEndorsedChecks") },
        { json: "BookkeepingCertified", js: "BookkeepingCertified", typ: r("AcceptsEndorsedChecks") },
        { json: "PlanningGroup", js: "PlanningGroup", typ: null },
        { json: "Affiliate", js: "Affiliate", typ: r("AcceptsEndorsedChecks") },
        { json: "Industry", js: "Industry", typ: null },
        { json: "VatIDNum", js: "VatIDNum", typ: null },
        { json: "DatevAccount", js: "DatevAccount", typ: null },
        { json: "DatevFirstDataEntry", js: "DatevFirstDataEntry", typ: r("BackOrder") },
        { json: "UseShippedGoodsAccount", js: "UseShippedGoodsAccount", typ: r("AcceptsEndorsedChecks") },
        { json: "GTSRegNo", js: "GTSRegNo", typ: null },
        { json: "GTSBankAccountNo", js: "GTSBankAccountNo", typ: null },
        { json: "GTSBillingAddrTel", js: "GTSBillingAddrTel", typ: null },
        { json: "ETaxWebSite", js: "ETaxWebSite", typ: null },
        { json: "HouseBankIBAN", js: "HouseBankIBAN", typ: null },
        { json: "VATRegistrationNumber", js: "VATRegistrationNumber", typ: null },
        { json: "RepresentativeName", js: "RepresentativeName", typ: null },
        { json: "IndustryType", js: "IndustryType", typ: null },
        { json: "BusinessType", js: "BusinessType", typ: null },
        { json: "Series", js: "Series", typ: 0 },
        { json: "AutomaticPosting", js: "AutomaticPosting", typ: u(r("AutomaticPosting"), null) },
        { json: "InterestAccount", js: "InterestAccount", typ: null },
        { json: "FeeAccount", js: "FeeAccount", typ: null },
        { json: "CampaignNumber", js: "CampaignNumber", typ: null },
        { json: "AliasName", js: "AliasName", typ: null },
        { json: "DefaultBlanketAgreementNumber", js: "DefaultBlanketAgreementNumber", typ: null },
        { json: "EffectiveDiscount", js: "EffectiveDiscount", typ: r("DiscountRelations") },
        { json: "NoDiscounts", js: "NoDiscounts", typ: r("AcceptsEndorsedChecks") },
        { json: "EffectivePrice", js: "EffectivePrice", typ: r("EffectivePrice") },
        { json: "EffectivePriceConsidersPriceBeforeDiscount", js: "EffectivePriceConsidersPriceBeforeDiscount", typ: r("AcceptsEndorsedChecks") },
        { json: "GlobalLocationNumber", js: "GlobalLocationNumber", typ: null },
        { json: "EDISenderID", js: "EDISenderID", typ: null },
        { json: "EDIRecipientID", js: "EDIRecipientID", typ: null },
        { json: "ResidenNumber", js: "ResidenNumber", typ: r("ResidenNumber") },
        { json: "RelationshipCode", js: "RelationshipCode", typ: null },
        { json: "RelationshipDateFrom", js: "RelationshipDateFrom", typ: null },
        { json: "RelationshipDateTill", js: "RelationshipDateTill", typ: null },
        { json: "UnifiedFederalTaxID", js: "UnifiedFederalTaxID", typ: null },
        { json: "AttachmentEntry", js: "AttachmentEntry", typ: null },
        { json: "TypeOfOperation", js: "TypeOfOperation", typ: u(null, "") },
        { json: "EndorsableChecksFromBP", js: "EndorsableChecksFromBP", typ: r("BackOrder") },
        { json: "AcceptsEndorsedChecks", js: "AcceptsEndorsedChecks", typ: r("AcceptsEndorsedChecks") },
        { json: "OwnerCode", js: "OwnerCode", typ: u(0, null) },
        { json: "BlockSendingMarketingContent", js: "BlockSendingMarketingContent", typ: r("AcceptsEndorsedChecks") },
        { json: "AgentCode", js: "AgentCode", typ: null },
        { json: "PriceMode", js: "PriceMode", typ: null },
        { json: "EDocGenerationType", js: "EDocGenerationType", typ: null },
        { json: "EDocStreet", js: "EDocStreet", typ: null },
        { json: "EDocStreetNumber", js: "EDocStreetNumber", typ: null },
        { json: "EDocBuildingNumber", js: "EDocBuildingNumber", typ: null },
        { json: "EDocZipCode", js: "EDocZipCode", typ: null },
        { json: "EDocCity", js: "EDocCity", typ: null },
        { json: "EDocCountry", js: "EDocCountry", typ: null },
        { json: "EDocDistrict", js: "EDocDistrict", typ: null },
        { json: "EDocRepresentativeFirstName", js: "EDocRepresentativeFirstName", typ: null },
        { json: "EDocRepresentativeSurname", js: "EDocRepresentativeSurname", typ: null },
        { json: "EDocRepresentativeCompany", js: "EDocRepresentativeCompany", typ: null },
        { json: "EDocRepresentativeFiscalCode", js: "EDocRepresentativeFiscalCode", typ: null },
        { json: "EDocRepresentativeAdditionalId", js: "EDocRepresentativeAdditionalId", typ: null },
        { json: "EDocPECAddress", js: "EDocPECAddress", typ: null },
        { json: "IPACodeForPA", js: "IPACodeForPA", typ: null },
        { json: "UpdateDate", js: "UpdateDate", typ: u(Date, null) },
        { json: "UpdateTime", js: "UpdateTime", typ: u(null, "") },
        { json: "ExemptionMaxAmountValidationType", js: "ExemptionMaxAmountValidationType", typ: r("ExemptionMaxAmountValidationType") },
        { json: "ECommerceMerchantID", js: "ECommerceMerchantID", typ: null },
        { json: "UseBillToAddrToDetermineTax", js: "UseBillToAddrToDetermineTax", typ: r("AcceptsEndorsedChecks") },
        { json: "CreateDate", js: "CreateDate", typ: Date },
        { json: "CreateTime", js: "CreateTime", typ: "" },
        { json: "DefaultTransporterEntry", js: "DefaultTransporterEntry", typ: null },
        { json: "DefaultTransporterLineNumber", js: "DefaultTransporterLineNumber", typ: null },
        { json: "FCERelevant", js: "FCERelevant", typ: r("AcceptsEndorsedChecks") },
        { json: "FCEValidateBaseDelivery", js: "FCEValidateBaseDelivery", typ: r("AcceptsEndorsedChecks") },
        { json: "MainUsage", js: "MainUsage", typ: null },
        { json: "EBooksVATExemptionCause", js: "EBooksVATExemptionCause", typ: null },
        { json: "LegalText", js: "LegalText", typ: null },
        { json: "DataVersion", js: "DataVersion", typ: 0 },
        { json: "ExchangeRateForIncomingPayment", js: "ExchangeRateForIncomingPayment", typ: r("BackOrder") },
        { json: "ExchangeRateForOutgoingPayment", js: "ExchangeRateForOutgoingPayment", typ: r("BackOrder") },
        { json: "CertificateDetails", js: "CertificateDetails", typ: null },
        { json: "DefaultCurrency", js: "DefaultCurrency", typ: u(r("Currency"), null) },
        { json: "EORINumber", js: "EORINumber", typ: null },
        { json: "FCEAsPaymentMeans", js: "FCEAsPaymentMeans", typ: r("AcceptsEndorsedChecks") },
        { json: "NotRelevantForMonthlyInvoice", js: "NotRelevantForMonthlyInvoice", typ: r("AcceptsEndorsedChecks") },
        { json: "U_B1SYS_MainUsage", js: "U_B1SYS_MainUsage", typ: null },
        { json: "U_B1SYS_FiscRegime", js: "U_B1SYS_FiscRegime", typ: null },
        { json: "U_B1SYS_SubjToTax", js: "U_B1SYS_SubjToTax", typ: u(null, "") },
        { json: "ElectronicProtocols", js: "ElectronicProtocols", typ: a("any") },
        { json: "BPAddresses", js: "BPAddresses", typ: a(r("BPAddress")) },
        { json: "ContactEmployees", js: "ContactEmployees", typ: a(r("ContactEmployee")) },
        { json: "BPAccountReceivablePaybleCollection", js: "BPAccountReceivablePaybleCollection", typ: a("any") },
        { json: "BPPaymentMethods", js: "BPPaymentMethods", typ: a(r("BPPaymentMethod")) },
        { json: "BPWithholdingTaxCollection", js: "BPWithholdingTaxCollection", typ: a("any") },
        { json: "BPPaymentDates", js: "BPPaymentDates", typ: a("any") },
        { json: "BPBranchAssignment", js: "BPBranchAssignment", typ: a("any") },
        { json: "BPBankAccounts", js: "BPBankAccounts", typ: a(r("BPBankAccount")) },
        { json: "BPFiscalTaxIDCollection", js: "BPFiscalTaxIDCollection", typ: a("any") },
        { json: "DiscountGroups", js: "DiscountGroups", typ: a("any") },
        { json: "BPIntrastatExtension", js: "BPIntrastatExtension", typ: r("BPIntrastatExtension") },
        { json: "BPBlockSendingMarketingContents", js: "BPBlockSendingMarketingContents", typ: a("any") },
        { json: "BPCurrenciesCollection", js: "BPCurrenciesCollection", typ: a(r("BPCurrenciesCollection")) },
    ], false),
    "BPAddress": o([
        { json: "AddressName", js: "AddressName", typ: "" },
        { json: "Street", js: "Street", typ: u(null, "") },
        { json: "Block", js: "Block", typ: u(null, "") },
        { json: "ZipCode", js: "ZipCode", typ: u(null, "") },
        { json: "City", js: "City", typ: u(r("BillToState"), null) },
        { json: "County", js: "County", typ: null },
        { json: "Country", js: "Country", typ: r("Country") },
        { json: "State", js: "State", typ: u(r("BillToState"), null) },
        { json: "FederalTaxID", js: "FederalTaxID", typ: u(null, "") },
        { json: "TaxCode", js: "TaxCode", typ: u(r("TaxCode"), null) },
        { json: "BuildingFloorRoom", js: "BuildingFloorRoom", typ: u(null, "") },
        { json: "AddressType", js: "AddressType", typ: r("AddressType") },
        { json: "AddressName2", js: "AddressName2", typ: null },
        { json: "AddressName3", js: "AddressName3", typ: null },
        { json: "TypeOfAddress", js: "TypeOfAddress", typ: null },
        { json: "StreetNo", js: "StreetNo", typ: null },
        { json: "BPCode", js: "BPCode", typ: "" },
        { json: "RowNum", js: "RowNum", typ: 0 },
        { json: "GlobalLocationNumber", js: "GlobalLocationNumber", typ: null },
        { json: "Nationality", js: "Nationality", typ: null },
        { json: "TaxOffice", js: "TaxOffice", typ: null },
        { json: "GSTIN", js: "GSTIN", typ: null },
        { json: "GstType", js: "GstType", typ: null },
        { json: "CreateDate", js: "CreateDate", typ: Date },
        { json: "CreateTime", js: "CreateTime", typ: "" },
        { json: "MYFType", js: "MYFType", typ: null },
        { json: "TaasEnabled", js: "TaasEnabled", typ: r("BackOrder") },
    ], false),
    "BPBankAccount": o([
        { json: "LogInstance", js: "LogInstance", typ: 0 },
        { json: "UserNo4", js: "UserNo4", typ: null },
        { json: "BPCode", js: "BPCode", typ: "" },
        { json: "County", js: "County", typ: null },
        { json: "State", js: "State", typ: null },
        { json: "UserNo2", js: "UserNo2", typ: null },
        { json: "IBAN", js: "IBAN", typ: null },
        { json: "ZipCode", js: "ZipCode", typ: null },
        { json: "City", js: "City", typ: u(r("BillToState"), null) },
        { json: "Block", js: "Block", typ: null },
        { json: "Branch", js: "Branch", typ: u(null, "") },
        { json: "Country", js: "Country", typ: r("Country") },
        { json: "Street", js: "Street", typ: null },
        { json: "ControlKey", js: "ControlKey", typ: null },
        { json: "UserNo3", js: "UserNo3", typ: null },
        { json: "BankCode", js: "BankCode", typ: "" },
        { json: "AccountNo", js: "AccountNo", typ: "" },
        { json: "UserNo1", js: "UserNo1", typ: null },
        { json: "InternalKey", js: "InternalKey", typ: 0 },
        { json: "BuildingFloorRoom", js: "BuildingFloorRoom", typ: null },
        { json: "BIK", js: "BIK", typ: null },
        { json: "AccountName", js: "AccountName", typ: null },
        { json: "CorrespondentAccount", js: "CorrespondentAccount", typ: null },
        { json: "Phone", js: "Phone", typ: null },
        { json: "Fax", js: "Fax", typ: null },
        { json: "CustomerIdNumber", js: "CustomerIdNumber", typ: "" },
        { json: "ISRBillerID", js: "ISRBillerID", typ: null },
        { json: "ISRType", js: "ISRType", typ: 0 },
        { json: "BICSwiftCode", js: "BICSwiftCode", typ: null },
        { json: "ABARoutingNumber", js: "ABARoutingNumber", typ: null },
        { json: "MandateID", js: "MandateID", typ: null },
        { json: "SignatureDate", js: "SignatureDate", typ: null },
        { json: "MandateExpDate", js: "MandateExpDate", typ: null },
        { json: "SEPASeqType", js: "SEPASeqType", typ: null },
    ], false),
    "BPCurrenciesCollection": o([
        { json: "CurrencyCode", js: "CurrencyCode", typ: "" },
        { json: "Include", js: "Include", typ: r("BackOrder") },
    ], false),
    "BPIntrastatExtension": o([
        { json: "CardCode", js: "CardCode", typ: u(undefined, "") },
        { json: "TransportMode", js: "TransportMode", typ: u(undefined, null) },
        { json: "Incoterms", js: "Incoterms", typ: u(undefined, null) },
        { json: "NatureOfTransactions", js: "NatureOfTransactions", typ: u(undefined, null) },
        { json: "StatisticalProcedure", js: "StatisticalProcedure", typ: u(undefined, null) },
        { json: "CustomsProcedure", js: "CustomsProcedure", typ: u(undefined, null) },
        { json: "PortOfEntryOrExit", js: "PortOfEntryOrExit", typ: u(undefined, null) },
        { json: "DomesticOrForeignID", js: "DomesticOrForeignID", typ: u(undefined, null) },
        { json: "IntrastatRelevant", js: "IntrastatRelevant", typ: u(undefined, r("AcceptsEndorsedChecks")) },
    ], false),
    "BPPaymentMethod": o([
        { json: "PaymentMethodCode", js: "PaymentMethodCode", typ: r("YmentMethodCode") },
        { json: "RowNumber", js: "RowNumber", typ: 0 },
        { json: "BPCode", js: "BPCode", typ: "" },
    ], false),
    "ContactEmployee": o([
        { json: "CardCode", js: "CardCode", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Position", js: "Position", typ: "" },
        { json: "Address", js: "Address", typ: "" },
        { json: "Phone1", js: "Phone1", typ: "" },
        { json: "Phone2", js: "Phone2", typ: null },
        { json: "MobilePhone", js: "MobilePhone", typ: u(null, "") },
        { json: "Fax", js: "Fax", typ: "" },
        { json: "E_Mail", js: "E_Mail", typ: "" },
        { json: "Pager", js: "Pager", typ: null },
        { json: "Remarks1", js: "Remarks1", typ: null },
        { json: "Remarks2", js: "Remarks2", typ: null },
        { json: "Password", js: "Password", typ: null },
        { json: "InternalCode", js: "InternalCode", typ: 0 },
        { json: "PlaceOfBirth", js: "PlaceOfBirth", typ: null },
        { json: "DateOfBirth", js: "DateOfBirth", typ: null },
        { json: "Gender", js: "Gender", typ: r("Gender") },
        { json: "Profession", js: "Profession", typ: null },
        { json: "Title", js: "Title", typ: r("Title") },
        { json: "CityOfBirth", js: "CityOfBirth", typ: null },
        { json: "Active", js: "Active", typ: r("BackOrder") },
        { json: "FirstName", js: "FirstName", typ: u(null, "") },
        { json: "MiddleName", js: "MiddleName", typ: null },
        { json: "LastName", js: "LastName", typ: u(null, "") },
        { json: "EmailGroupCode", js: "EmailGroupCode", typ: null },
        { json: "BlockSendingMarketingContent", js: "BlockSendingMarketingContent", typ: r("AcceptsEndorsedChecks") },
        { json: "CreateDate", js: "CreateDate", typ: Date },
        { json: "CreateTime", js: "CreateTime", typ: "" },
        { json: "UpdateDate", js: "UpdateDate", typ: Date },
        { json: "UpdateTime", js: "UpdateTime", typ: "" },
        { json: "ConnectedAddressName", js: "ConnectedAddressName", typ: null },
        { json: "ConnectedAddressType", js: "ConnectedAddressType", typ: null },
        { json: "ForeignCountry", js: "ForeignCountry", typ: null },
        { json: "ContactEmployeeBlockSendingMarketingContents", js: "ContactEmployeeBlockSendingMarketingContents", typ: a("any") },
    ], false),
    "AcceptsEndorsedChecks": [
        "tNO",
    ],
    "AutomaticPosting": [
        "apNo",
    ],
    "AddressType": [
        "bo_BillTo",
        "bo_ShipTo",
    ],
    "BillToState": [
        "Bratislava",
        "DF",
        "Manchester",
        "Mexico D.F.",
        "Montreal",
        "Toronto",
    ],
    "Country": [
        "CA",
        "GB",
        "MX",
        "SK",
    ],
    "BackOrder": [
        "tYES",
    ],
    "TaxCode": [
        "B16",
        "B2",
        "",
    ],
    "YmentMethodCode": [
        "INC_Transfer",
        "OUT_Cheque",
        "OUT_Transfer",
    ],
    "BilltoDefault": [
        "Bill to",
        "de Facturacion",
        "de Pago",
        "IMP",
    ],
    "CardType": [
        "cCustomer",
        "cLid",
        "cSupplier",
    ],
    "CompanyPrivate": [
        "cCompany",
        "cEmployee",
        "cPrivate",
    ],
    "Gender": [
        "gt_Undefined",
    ],
    "Title": [
        "Mr.",
        "Mrs.",
        "Sr.",
        "Sra.",
        "Srta.",
    ],
    "Currency": [
        "##",
        "EUR",
        "MXP",
        "USD",
    ],
    "DiscountBaseObject": [
        "dgboNone",
    ],
    "DiscountRelations": [
        "dgrLowestDiscount",
    ],
    "DunningTerm": [
        "",
        "Estandar",
    ],
    "EffectivePrice": [
        "epDefaultPriority",
    ],
    "ExemptionMaxAmountValidationType": [
        "emaIndividual",
    ],
    "FatherType": [
        "cPayments_sum",
    ],
    "HouseBankBranch": [
        "Sucursal 1",
    ],
    "OperationCode347": [
        "ocGoodsOrServiciesAcquisitions",
        "ocSalesOrServicesRevenues",
    ],
    "ResidenNumber": [
        "rntSpanishFiscalID",
    ],
    "ShaamGroup": [
        "sgServicesAndAsset",
    ],
    "SubjectToWithholdingTax": [
        "boNO",
        "boYES",
    ],
    "TaxRoundingRule": [
        "trr_CompanyDefault",
    ],
    "TypeReport": [
        "atCompany",
    ],
    "VatLiable": [
        "vExempted",
        "vLiable",
    ],
};
