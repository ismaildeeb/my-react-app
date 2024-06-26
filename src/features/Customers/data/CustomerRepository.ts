import { AxiosResponse } from "axios";
import { Customer } from "../Customer.model";
import { ICustomerRepository } from "./ICustomerRepository";
import axiosIns from "../../../plugin/axios";
import { GetCustomersParams } from "../Models/get-customers-params";
import { CreateCustomerParams } from "../Models/create-customer-params";
import { UpdateCustomerStatus } from '../Models/update-customerstatus-params';


class CustomerRepository implements ICustomerRepository {

    private readonly _endpoint = 'Customers'


    async getCustomers(params: GetCustomersParams): Promise<AxiosResponse<Customer>> {
        return await axiosIns.get<Customer>(this._endpoint, { params })
    }
    async getCustomer(id: number): Promise<AxiosResponse<Customer>> {
        return await axiosIns.get<Customer>(`${this._endpoint}/${id}`)
    }
    async createCustomer(customer: CreateCustomerParams): Promise<AxiosResponse<Customer>> {
        return await axiosIns.post<Customer>(this._endpoint, customer)
    }
    async updateCustomer(customer: Customer): Promise<AxiosResponse<Customer>> {
        return await axiosIns.put<Customer>(this._endpoint, customer)
    }
    async updateCustomerStatus(customer: UpdateCustomerStatus): Promise<AxiosResponse<Customer>> {
        return await axiosIns.put<Customer>(this._endpoint, customer)
    }
    async deleteCustomer(id: number): Promise<AxiosResponse<void>> {
        return await axiosIns.delete<void>(`${this._endpoint}/${id}`)
    }

}

export default CustomerRepository