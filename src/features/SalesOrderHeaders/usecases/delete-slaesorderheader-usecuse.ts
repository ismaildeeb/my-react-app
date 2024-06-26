import { AxiosResponse } from "axios";
import SalesOrderHeaderRepository from "../data/SalesOrderHeaderRepository";

export class DeleteSalesOrderHeaderUseCase {
    private readonly _customerRepository: SalesOrderHeaderRepository = new SalesOrderHeaderRepository()
    async execute(id: number): Promise<AxiosResponse<void>> {
        return this._customerRepository.deleteSalesOrderHeader(id)
    }

}