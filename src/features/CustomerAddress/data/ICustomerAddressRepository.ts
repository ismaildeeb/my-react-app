import { AxiosResponse } from "axios";
import { CustomerAddress } from "../CustomerAddress.model";

export interface ICustomerAddressRepository {
    getCustomerAddresses(): Promise<AxiosResponse<CustomerAddress>>
    getCustomerAddress(id: number): Promise<AxiosResponse<CustomerAddress>>
    createCustomerAddress(params: CustomerAddress): Promise<AxiosResponse<CustomerAddress>>
    updateCustomerAddress(params: CustomerAddress, id: number): Promise<AxiosResponse<CustomerAddress>>
    deleteCustomer(id: number): Promise<AxiosResponse<void>>
}