import { AxiosResponse } from "axios";
import SalesOrderShippingAddressRepository from "../data/SalesOrderShippingAddressRepository";
import { SalesOrderShippingAddress } from "../SalesOrderShippingAddress.model";

export class DeleteSalesOrderShippingAddressUseCase {
    private readonly _customerRepository: SalesOrderShippingAddressRepository = new SalesOrderShippingAddressRepository()
    async execute(id: number): Promise<AxiosResponse<void>> {
        return this._customerRepository.deleteSalesOrderShippingAddress(id)
    }

}