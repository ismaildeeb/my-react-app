import { AxiosResponse } from "axios";
import SalesOrderDetailRepository from "../data/SalesOrderDetailRepository";
import { SalesOrderDetails } from "../SalesOrderDetail.model";


export class GetSalesOrderDetailUseCase {
    private readonly _productRepository: SalesOrderDetailRepository = new SalesOrderDetailRepository()
    async execute(id: number): Promise<AxiosResponse<SalesOrderDetails>> {
        return this._productRepository.getSalesOrderDetail(id)
    }
}