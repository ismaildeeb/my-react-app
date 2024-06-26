import { Customer } from "../Customers/Customer.model"
export interface CustomerAddress {
    Customer: Customer,
    Address1: string,
    Address2: string,
    City: string,
    State: string,
    Postal: string,
    Country: string
    HasShippingAddressFlag: boolean,
    HasBillingAddressFlag: boolean
}