import { SalesOrderBillingAddress } from '../SalesOrderBillingAddress.model';
import { CreateSalesOrderBillingAddressParams } from '../Models/create-salesorderbillingaddress-params'
import SalesOrderBillingAddressRepository from '../data/SalesOrderBillingAddressRepository'
import { AxiosResponse } from "axios";



export class CreateSalesOrderBillingAddressUseCase {
    private readonly _salesorderbillingaddressRepository: SalesOrderBillingAddressRepository = new SalesOrderBillingAddressRepository()

    async execute(salesorderbillingaddress: CreateSalesOrderBillingAddressParams): Promise<AxiosResponse<SalesOrderBillingAddress>> {
        return this._salesorderbillingaddressRepository.createSalesOrderBillingAddress
            (salesorderbillingaddress)
    }
}
