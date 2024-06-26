import { AxiosResponse } from "axios";
import { SalesOrderShippingAddress } from "../SalesOrderShippingAddress.model";

export interface ISalesOrderShippingAddressRepository {
    getSalesOrderShippingAddresses(): Promise<AxiosResponse<SalesOrderShippingAddress>>
    getSalesOrderShippingAddress(id: number): Promise<AxiosResponse<SalesOrderShippingAddress>>
    createSalesOrderShippingAddress(params: SalesOrderShippingAddress): Promise<AxiosResponse<SalesOrderShippingAddress>>
    updateSalesOrderShippingAddress(params: SalesOrderShippingAddress): Promise<AxiosResponse<SalesOrderShippingAddress>>
    deleteSalesOrderShippingAddress(id: number): Promise<AxiosResponse<void>>
}