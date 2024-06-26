import { AxiosResponse } from "axios";
import SalesOrderHeaderRepository from "../data/SalesOrderHeaderRepository";
import { SalesOrderHeader } from "../SalesOrderHeader";

export class GetSalesOrderHeaderUseCase {
    private readonly _salesorderheaderRepository: SalesOrderHeaderRepository = new SalesOrderHeaderRepository()
    async execute(id: number): Promise<AxiosResponse<SalesOrderHeader>> {
        return this._salesorderheaderRepository.getSalesOrderHeader(id)
    }
}