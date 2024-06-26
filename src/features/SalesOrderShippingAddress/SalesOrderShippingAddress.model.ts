import { SalesOrderHeader } from "../SalesOrderHeaders/SalesOrderHeader"
export interface SalesOrderShippingAddress {
    SalesOrderHeader: SalesOrderHeader,
    Address1: string,
    Address2: string,
    City: string,
    State: string,
    Postal: string,
    Country: string
}