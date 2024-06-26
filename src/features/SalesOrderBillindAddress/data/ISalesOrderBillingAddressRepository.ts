import { AxiosResponse } from "axios";
import { SalesOrderBillingAddress } from "../SalesOrderBillingAddress.model";


export interface ISalesOrderBillingAddressRepository {
    getSalesOrderBillingAddresses(): Promise<AxiosResponse<SalesOrderBillingAddress>>
    getSalesOrderBillingAddress(id: number): Promise<AxiosResponse<SalesOrderBillingAddress>>
    createSalesOrderBillingAddress(customer: SalesOrderBillingAddress): Promise<AxiosResponse<SalesOrderBillingAddress>>
    updateSalesOrderBillingAddress(customer: SalesOrderBillingAddress, id: number): Promise<AxiosResponse<SalesOrderBillingAddress>>
    deleteSalesOrderBillingAddress(id: number): Promise<AxiosResponse<void>>
}