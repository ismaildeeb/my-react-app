import { CustomerAddress } from '../CustomerAddress.model';
import { CreateCustomerAddressParams } from '../Models/create-customerAddress-params';
import CustomerAddressRepository from '../data/CustomerAddressRepository'
import { AxiosResponse } from "axios";



export class CreateCustomerAddressUseCase {
    private readonly _customeraddressRepository: CustomerAddressRepository = new CustomerAddressRepository()

    async execute(customeraddress: CreateCustomerAddressParams): Promise<AxiosResponse<CustomerAddress>> {
        return this._customeraddressRepository.createCustomerAddress(customeraddress)
    }
}
