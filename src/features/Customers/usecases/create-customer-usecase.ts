import { Customer } from '../Customer.model';
import { CreateCustomerParams } from '../Models/create-customer-params'
import CustomerRepository from '../data/CustomerRepository'
import { AxiosResponse } from "axios";



export class CreateCustomerUseCase {
    private readonly _customerRepository: CustomerRepository = new CustomerRepository()

    async execute(customer: CreateCustomerParams): Promise<AxiosResponse<Customer>> {
        return this._customerRepository.createCustomer(customer)
    }
}
