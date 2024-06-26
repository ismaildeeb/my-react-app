import { AxiosResponse } from "axios";
import ProductRepository from "../data/CustomerAddressRepository";
import { CustomerAddress } from "../CustomerAddress.model";
import CustomerAddressRepository from "../data/CustomerAddressRepository";

export class GetCustomerAddressUseCase {
    private readonly _customeraddressRepository: CustomerAddressRepository = new CustomerAddressRepository()
    async execute(id: number): Promise<AxiosResponse<CustomerAddress>> {
        return this._customeraddressRepository.getCustomerAddress(id)
    }
}