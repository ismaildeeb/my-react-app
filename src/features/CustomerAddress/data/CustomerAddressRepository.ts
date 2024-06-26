import { AxiosResponse } from "axios";
import { CustomerAddress } from "../CustomerAddress.model";
import axiosIns from "../../../plugin/axios";
import { CreateCustomerAddressParams } from "../Models/create-customerAddress-params";


class CustomerAddressRepository implements CustomerAddressRepository {

    private readonly _endpoint = 'CustomersAddress'


    async getCustomerAddresses(): Promise<AxiosResponse<CustomerAddress>> {
        return await axiosIns.get<CustomerAddress>(this._endpoint)
    }
    async getCustomerAddress(id: number): Promise<AxiosResponse<CustomerAddress>> {
        return await axiosIns.get<CustomerAddress>(`${this._endpoint}/GetById/${id}`)
    }
    async createCustomerAddress(customerAddress: CreateCustomerAddressParams): Promise<AxiosResponse<CustomerAddress>> {
        return await axiosIns.post<CustomerAddress>(this._endpoint, customerAddress)
    }
    async updateCustomerAddress(customerAddress: CustomerAddress): Promise<AxiosResponse<CustomerAddress>> {
        return await axiosIns.put<CustomerAddress>(this._endpoint, customerAddress)
    }
    async deleteCustomerAddress(id: number): Promise<AxiosResponse<void>> {
        return await axiosIns.delete<void>(`${this._endpoint}/${id}`)
    }

}

export default CustomerAddressRepository