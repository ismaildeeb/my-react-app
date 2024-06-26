import { SalesOrderDetails } from '../SalesOrderDetail.model';
import { CreateSalesOrderDetailParams } from '../Models/create-salesorderdetail-params'
import SalesOrderDetailRepository from '../data/SalesOrderDetailRepository'
import { AxiosResponse } from "axios";



export class CreateSalesOrderDetailUseCase {
    private readonly _salesorderdetailRepository: SalesOrderDetailRepository = new SalesOrderDetailRepository()

    async execute(salesorderdetail: CreateSalesOrderDetailParams): Promise<AxiosResponse<SalesOrderDetails>> {
        return this._salesorderdetailRepository.createSalesOrderDetail(salesorderdetail)
    }
}
