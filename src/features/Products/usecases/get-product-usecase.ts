import { AxiosResponse } from "axios";
import ProductRepository from "../data/ProductRepository";
import { Product } from "../Product.model";

export class GetProductUseCase {
    private readonly _productRepository: ProductRepository = new ProductRepository()
    async execute(id: number): Promise<AxiosResponse<Product>> {
        return this._productRepository.getProduct(id)
    }
}