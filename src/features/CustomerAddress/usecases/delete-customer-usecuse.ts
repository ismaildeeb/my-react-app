import { AxiosResponse } from "axios";
import ProductRepository from "../data/CustomerAddressRepository";
import CustomerAddressRepository from "../data/CustomerAddressRepository";

export class DeleteCustomerAddressUseCase {
    private readonly _customeraddressRepository: CustomerAddressRepository = new CustomerAddressRepository()
    async execute(id: number): Promise<AxiosResponse<void>> {
        return this._customeraddressRepository.deleteCustomerAddress(id)
    }

}