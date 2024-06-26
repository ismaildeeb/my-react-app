import { AxiosResponse } from "axios";
import ProductRepository from "../data/CustomerRepository";
import CustomerRepository from "../data/CustomerRepository";

export class DeleteCustomerUseCase {
    private readonly _customerRepository: CustomerRepository = new CustomerRepository()
    async execute(id: number): Promise<AxiosResponse<void>> {
        return this._customerRepository.deleteCustomer(id)
    }

}