import { AxiosResponse } from "axios";
import { SalesOrderBillingAddress } from "../SalesOrderBillingAddress.model";
import { ISalesOrderBillingAddressRepository } from "./ISalesOrderBillingAddressRepository";
import axiosIns from "../../../plugin/axios";
import { CreateSalesOrderBillingAddressParams } from "../Models/create-salesorderbillingaddress-params";

class SalesOrderBillingAddressRepository implements ISalesOrderBillingAddressRepository {

    private readonly _endpoint = 'SalesOrderBillingAddresses'


    async getSalesOrderBillingAddresses(): Promise<AxiosResponse<SalesOrderBillingAddress>> {
        return await axiosIns.get<SalesOrderBillingAddress>(this._endpoint)
    }
    async getSalesOrderBillingAddress(id: number): Promise<AxiosResponse<SalesOrderBillingAddress>> {
        return await axiosIns.get<SalesOrderBillingAddress>(`${this._endpoint}/${id}`)
    }
    async createSalesOrderBillingAddress(customer: CreateSalesOrderBillingAddressParams): Promise<AxiosResponse<SalesOrderBillingAddress>> {
        return await axiosIns.post<SalesOrderBillingAddress>(this._endpoint, customer)
    }
    async updateSalesOrderBillingAddress(customer: SalesOrderBillingAddress): Promise<AxiosResponse<SalesOrderBillingAddress>> {
        return await axiosIns.put<SalesOrderBillingAddress>(this._endpoint, customer)
    }
    async deleteSalesOrderBillingAddress(id: number): Promise<AxiosResponse<void>> {
        return await axiosIns.delete<void>(`${this._endpoint}/${id}`)
    }

}

export default SalesOrderBillingAddressRepository