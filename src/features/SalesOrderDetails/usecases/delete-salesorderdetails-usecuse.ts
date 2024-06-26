import { AxiosResponse } from "axios";
import SalesOrderDetailRepository from "../data/SalesOrderDetailRepository";

export class DeleteSalesOrderDetailUseCase {
    private readonly _customerRepository: SalesOrderDetailRepository = new SalesOrderDetailRepository()
    async execute(id: number): Promise<AxiosResponse<void>> {
        return this._customerRepository.deleteSalesOrderDetail(id)
    }

}