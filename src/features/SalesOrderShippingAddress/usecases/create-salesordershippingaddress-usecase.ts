import { SalesOrderShippingAddress } from '../SalesOrderShippingAddress.model';
import { CreateSalesOrderShippingAddressParams } from '../Models/create-salesordershippingaddress-params'
import SalesOrderShippingAddressRepository from '../data/SalesOrderShippingAddressRepository'
import { AxiosResponse } from "axios";



export class CreateSalesOrderShippingAddressUseCase {
    private readonly _salesordershippingaddressRepository: SalesOrderShippingAddressRepository = new SalesOrderShippingAddressRepository()

    async execute(salesordershippingaddress: CreateSalesOrderShippingAddressParams): Promise<AxiosResponse<SalesOrderShippingAddress>> {
        return this._salesordershippingaddressRepository.createSalesOrderShippingAddress(salesordershippingaddress)
    }
}
