import { SalesOrderHeader } from '../SalesOrderHeader';
import { ISalesOrderHeaderRepository } from './ISalesOrderHeaderRepository';
import { AxiosResponse } from "axios";
import axiosIns from "../../../plugin/axios";
import { CreateSalesOrderHeaderParams } from '../Models/create-salesorderheader-params';

class SalesOrderHeaderRepository implements ISalesOrderHeaderRepository {

    private readonly _endpoint = 'SalesOrderHeader'


    async getSalesOrderHeaders(): Promise<AxiosResponse<SalesOrderHeader>> {
        return await axiosIns.get<SalesOrderHeader>(this._endpoint)
    }
    async getSalesOrderHeader(id: number): Promise<AxiosResponse<SalesOrderHeader>> {
        return await axiosIns.get<SalesOrderHeader>(`${this._endpoint}/${id}`)
    }
    async createSalesOrderHeader(params: CreateSalesOrderHeaderParams): Promise<AxiosResponse<SalesOrderHeader>> {
        return await axiosIns.post<SalesOrderHeader>(this._endpoint, { params })
    }
    async updateSalesOrderHeader(params: SalesOrderHeader): Promise<AxiosResponse<SalesOrderHeader>> {
        return await axiosIns.put<SalesOrderHeader>(this._endpoint, { params })
    }
    async deleteSalesOrderHeader(id: number): Promise<AxiosResponse<void>> {
        return await axiosIns.delete<void>(`${this._endpoint}/${id}`)
    }

}
export default SalesOrderHeaderRepository