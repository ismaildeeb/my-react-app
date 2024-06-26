import { AxiosResponse } from "axios";
import SalesOrderBillingAddressRepository from "../data/SalesOrderBillingAddressRepository";

export class DeleteSalesOrderBillingAddressUseCase {
    private readonly _customerRepository: SalesOrderBillingAddressRepository = new SalesOrderBillingAddressRepository()
    async execute(id: number): Promise<AxiosResponse<void>> {
        return this._customerRepository.deleteSalesOrderBillingAddress(id)
    }

}