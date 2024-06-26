
import { CreateSalesOrderHeaderParams } from '../Models/create-salesorderheader-params'
import { SalesOrderHeader } from '../SalesOrderHeader';
import SalesOrderHeaderRepository from '../data/SalesOrderHeaderRepository'
import { AxiosResponse } from "axios";



export class CreateSalesOrderHeaderUseCase {
    private readonly _salesorderheaderRepository: SalesOrderHeaderRepository = new SalesOrderHeaderRepository()

    async execute(salesorderheader: CreateSalesOrderHeaderParams): Promise<AxiosResponse<SalesOrderHeader>> {
        return this._salesorderheaderRepository.createSalesOrderHeader(salesorderheader)
    }
}
