import { AxiosResponse } from "axios";
import { SalesOrderDetails } from "../SalesOrderDetail.model";
import { CreateSalesOrderDetailParams } from "../Models/create-salesorderdetail-params";

export interface ISalesOrderDetailsRepository {
    getSalesOrderDetails(): Promise<AxiosResponse<SalesOrderDetails>>
    getSalesOrderDetail(id: number): Promise<AxiosResponse<SalesOrderDetails>>
    createSalesOrderDetail(params: CreateSalesOrderDetailParams): Promise<AxiosResponse<SalesOrderDetails>>
    updateSalesOrderDetail(params: CreateSalesOrderDetailParams, id: number): Promise<AxiosResponse<SalesOrderDetails>>
    deleteSalesOrderDetail(id: number): Promise<AxiosResponse<void>>
}