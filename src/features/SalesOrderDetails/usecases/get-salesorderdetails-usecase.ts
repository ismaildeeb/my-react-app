import { AxiosResponse } from "axios";
import SalesOrderDetailRepository from "../data/SalesOrderDetailRepository";
import { SalesOrderDetails } from "../SalesOrderDetail.model";

export class GetSalesOrderDetailUseCase {
    private readonly _salesorderdetailRepository: SalesOrderDetailRepository = new SalesOrderDetailRepository()
    async execute(): Promise<AxiosResponse<SalesOrderDetails>> {
        return await this._salesorderdetailRepository.getSalesOrderDetails()
    }
}