import { SalesOrderShippingAddress } from './../../SalesOrderShippingAddress/SalesOrderShippingAddress.model';
import { SalesOrderBillingAddress } from './../../SalesOrderBillindAddress/SalesOrderBillingAddress.model';
import { Customer } from './../../Customers/Customer.model';
export interface CreateSalesOrderHeaderParams {
    Customer: Customer,
    SalesOrderBillingAddress: SalesOrderBillingAddress,
    SalesOrderShippingAddress: SalesOrderShippingAddress
}