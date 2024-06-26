import { AxiosResponse } from "axios";
import CustomerAddressRepository from "../data/CustomerAddressRepository";
import { CustomerAddress } from "../CustomerAddress.model";

export class GetCustomerAddressUseCase {
    private readonly _customeraddressRepository: CustomerAddressRepository = new CustomerAddressRepository()
    async execute(): Promise<AxiosResponse<CustomerAddress>> {
        return await this._customeraddressRepository.getCustomerAddresses()
    }
}