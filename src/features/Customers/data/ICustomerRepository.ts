import { AxiosResponse } from "axios";
import { Customer } from "../Customer.model";
import { GetCustomersParams } from "../Models/get-customers-params";
import { UpdateCustomerStatus } from "../Models/update-customerstatus-params";

export interface ICustomerRepository {
    getCustomers(params: GetCustomersParams): Promise<AxiosResponse<Customer>>
    getCustomer(id: number): Promise<AxiosResponse<Customer>>
    createCustomer(params: Customer): Promise<AxiosResponse<Customer>>
    updateCustomer(params: Customer, id: number): Promise<AxiosResponse<Customer>>
    deleteCustomer(id: number): Promise<AxiosResponse<void>>
    updateCustomerStatus(params: UpdateCustomerStatus): Promise<AxiosResponse<Customer>>
}