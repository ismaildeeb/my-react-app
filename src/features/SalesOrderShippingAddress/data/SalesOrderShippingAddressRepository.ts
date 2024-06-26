import { AxiosResponse } from "axios";
import { SalesOrderShippingAddress } from "../SalesOrderShippingAddress.model";
import { ISalesOrderShippingAddressRepository } from "./ISalesOrderShippingAddressRepository";
import axiosIns from "../../../plugin/axios";
import { CreateSalesOrderShippingAddressParams } from "../Models/create-salesordershippingaddress-params";

class SalesOrderShippingAddressRepository implements ISalesOrderShippingAddressRepository {

    private readonly _endpoint = 'SalesOrderShippingAddresss'


    async getSalesOrderShippingAddresses(): Promise<AxiosResponse<SalesOrderShippingAddress>> {
        return await axiosIns.get<SalesOrderShippingAddress>(this._endpoint)
    }
    async getSalesOrderShippingAddress(id: number): Promise<AxiosResponse<SalesOrderShippingAddress>> {
        return await axiosIns.get<SalesOrderShippingAddress>(`${this._endpoint}/${id}`)
    }
    async createSalesOrderShippingAddress(params: CreateSalesOrderShippingAddressParams): Promise<AxiosResponse<SalesOrderShippingAddress>> {
        return await axiosIns.post<SalesOrderShippingAddress>(this._endpoint, params)
    }
    async updateSalesOrderShippingAddress(params: SalesOrderShippingAddress): Promise<AxiosResponse<SalesOrderShippingAddress, any>> {
        return await axiosIns.put<SalesOrderShippingAddress>(this._endpoint, params)
    }
    async updateSalesOrderHeaderStatus(params: SalesOrderShippingAddress): Promise<AxiosResponse<SalesOrderShippingAddress>> {
        return await axiosIns.put<SalesOrderShippingAddress>(this._endpoint, params)
    }
    async deleteSalesOrderShippingAddress(id: number): Promise<AxiosResponse<void>> {
        return await axiosIns.delete<void>(`${this._endpoint}/${id}`)
    }

}

export default SalesOrderShippingAddressRepository