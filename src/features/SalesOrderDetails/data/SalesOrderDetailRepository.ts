import { AxiosResponse } from "axios";
import { SalesOrderDetails } from "../SalesOrderDetail.model";
import { ISalesOrderDetailsRepository } from "./ISalesOrderDetailRepository";
import axiosIns from "../../../plugin/axios";
import { CreateSalesOrderDetailParams } from "../Models/create-salesorderdetail-params";


class SalesOrderDetailRepository implements ISalesOrderDetailsRepository {

    private readonly _endpoint = 'SalesOrderDetails'


    async getSalesOrderDetails(): Promise<AxiosResponse<SalesOrderDetails>> {
        return await axiosIns.get<SalesOrderDetails>(this._endpoint)
    }
    async getSalesOrderDetail(id: number): Promise<AxiosResponse<SalesOrderDetails>> {
        return await axiosIns.get<SalesOrderDetails>(`${this._endpoint}/${id}`)
    }
    async createSalesOrderDetail(params: CreateSalesOrderDetailParams): Promise<AxiosResponse<SalesOrderDetails>> {
        return await axiosIns.post<SalesOrderDetails>(this._endpoint, params)
    }
    async updateSalesOrderDetail(params: CreateSalesOrderDetailParams): Promise<AxiosResponse<SalesOrderDetails>> {
        return await axiosIns.put<SalesOrderDetails>(this._endpoint, params)
    }
    async deleteSalesOrderDetail(id: number): Promise<AxiosResponse<void>> {
        return await axiosIns.delete<void>(`${this._endpoint}/${id}`)
    }

}
export default SalesOrderDetailRepository