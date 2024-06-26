import { AxiosResponse } from "axios";
import { SalesOrderHeader } from "../SalesOrderHeader";

export interface ISalesOrderHeaderRepository {
    getSalesOrderHeaders(): Promise<AxiosResponse<SalesOrderHeader>>
    getSalesOrderHeader(id: number): Promise<AxiosResponse<SalesOrderHeader>>
    createSalesOrderHeader(params: SalesOrderHeader): Promise<AxiosResponse<SalesOrderHeader>>
    updateSalesOrderHeader(params: SalesOrderHeader, id: number): Promise<AxiosResponse<SalesOrderHeader>>
    deleteSalesOrderHeader(id: number): Promise<AxiosResponse<void>>
}