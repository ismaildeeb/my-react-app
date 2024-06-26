import { UpdateCustomerStatus } from './../Models/update-customerstatus-params';
import CustomerRepository from "../data/CustomerRepository";
import { AxiosResponse } from 'axios';
import { Customer } from '../Customer.model';

export class UpdateCustomerStatusUseCase {
    private readonly _customerRepository = new CustomerRepository()
    async execute(params: UpdateCustomerStatus): Promise<AxiosResponse<Customer>> {
        return await this._customerRepository.updateCustomerStatus(params)
    }
} 