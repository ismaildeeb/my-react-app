import { AxiosResponse } from "axios";
import { GetCustomersParams } from "../Models/get-customers-params";
import CustomerRepository from "../data/CustomerRepository";
import { Customer } from "../Customer.model";

export class GetCustomerUseCase {
    private readonly _customerRepository: CustomerRepository = new CustomerRepository()
    async execute(params: GetCustomersParams): Promise<AxiosResponse<Customer>> {
        return await this._customerRepository.getCustomers(params)
    }
}