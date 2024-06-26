import { AxiosResponse } from "axios";
import SalesOrderShippingAddressRepository from "../data/SalesOrderShippingAddressRepository";
import { SalesOrderShippingAddress } from "../SalesOrderShippingAddress.model";

export class GetSalesOrderShippingAddressUseCase {
    private readonly _salesordershippingaddressRepository: SalesOrderShippingAddressRepository = new SalesOrderShippingAddressRepository()
    async execute(): Promise<AxiosResponse<SalesOrderShippingAddress>> {
        return await this._salesordershippingaddressRepository.getSalesOrderShippingAddresses()
    }
}