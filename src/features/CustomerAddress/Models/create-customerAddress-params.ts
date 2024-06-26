export interface CreateCustomerAddressParams {
    Address1: string,
    Address2: string,
    City: string,
    State: string,
    PostalCode: Number,
    Country: string,
    ShippingAddressFlag: boolean,
    BillingAddressFlag: boolean
}