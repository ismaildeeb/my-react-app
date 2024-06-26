import { AxiosResponse } from "axios";
import SalesOrderHeaderRepository from "../data/SalesOrderHeaderRepository";
import { SalesOrderHeader } from "../SalesOrderHeader";

export class GetSalesOrderHeaderUseCase {
    private readonly _salesorderheaderRepository: SalesOrderHeaderRepository = new SalesOrderHeaderRepository()
    async execute(): Promise<AxiosResponse<SalesOrderHeader>> {
        return await this._salesorderheaderRepository.getSalesOrderHeaders()
    }
}