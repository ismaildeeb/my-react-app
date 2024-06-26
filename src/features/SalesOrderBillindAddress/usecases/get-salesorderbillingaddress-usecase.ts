import { AxiosResponse } from "axios";
import SalesOrderBillingAddressRepository from "../data/SalesOrderBillingAddressRepository";
import { SalesOrderBillingAddress } from "../SalesOrderBillingAddress.model";

export class GetSalesOrderBillingAddressUseCase {
    private readonly _salesorderbillingaddressRepository: SalesOrderBillingAddressRepository = new SalesOrderBillingAddressRepository()
    async execute(id: number): Promise<AxiosResponse<SalesOrderBillingAddress>> {
        return this._salesorderbillingaddressRepository.getSalesOrderBillingAddress(id)
    }
}