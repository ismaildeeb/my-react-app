import { AxiosResponse } from "axios";
import ProductRepository from "../data/ProductRepository";
import { Product } from "../Product.model";

export class GetProductUseCase {
    private readonly _productRepository: ProductRepository = new ProductRepository()
    async execute(): Promise<AxiosResponse<Product>> {
        return await this._productRepository.GetProducts()
    }
}