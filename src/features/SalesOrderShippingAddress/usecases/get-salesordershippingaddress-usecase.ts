import { AxiosResponse } from "axios";
import SalesOrderShippingAddressRepository from "../data/SalesOrderShippingAddressRepository";
import { SalesOrderShippingAddress } from "../SalesOrderShippingAddress.model";

export class GetSalesOrderShippingAddressUseCase {
    private readonly _salesordershippingaddressRepository: SalesOrderShippingAddressRepository = new SalesOrderShippingAddressRepository()
    async execute(id: number): Promise<AxiosResponse<SalesOrderShippingAddress>> {
        return this._salesordershippingaddressRepository.getSalesOrderShippingAddress(id)
    }
}