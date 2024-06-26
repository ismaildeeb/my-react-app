export interface UpdateCustomerAddressParams {
    Address1: string;
    Address2: string;
    City: string;
    State: string;
    PostalCode: number;
    Country: string;
    ShippingAddressFlag: boolean;
    BillingAddressFlag: boolean;
}