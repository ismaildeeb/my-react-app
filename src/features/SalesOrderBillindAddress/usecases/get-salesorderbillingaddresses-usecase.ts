import { AxiosResponse } from "axios";
import ProductRepository from "../../Products/data/ProductRepository";
import { Product } from "../../Products/Product.model";


export class GetProductUseCase {
    private readonly _productRepository: ProductRepository = new ProductRepository()
    async execute(): Promise<AxiosResponse<Product>> {
        return await this._productRepository.GetProducts()
    }
}