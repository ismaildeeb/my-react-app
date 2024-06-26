import { AxiosResponse } from "axios";
import ProductRepository from "../data/CustomerRepository";
import { Customer } from "../Customer.model";
import CustomerRepository from "../data/CustomerRepository";

export class GetCustomerUseCase {
    private readonly _customerRepository: CustomerRepository = new CustomerRepository()
    async execute(id: number): Promise<AxiosResponse<Customer>> {
        return this._customerRepository.getCustomer(id)
    }
}