import { Customer } from './../Customers/Customer.model';
import { SalesOrderBillingAddress } from './../SalesOrderBillindAddress/SalesOrderBillingAddress.model';
import { SalesOrderShippingAddress } from './../SalesOrderShippingAddress/SalesOrderShippingAddress.model';
export interface SalesOrderHeader {
    Status: boolean,
    Date: Date,
    Customer: Customer,
    Tax: Number,
    Subtotal: Number,
    GrandTotal: Number,
    AddressBilling: string,
    AddressShipping: string
    SalesOrderShippingAddress: SalesOrderShippingAddress,
    SalesOrderBillingAddress: SalesOrderBillingAddress
}