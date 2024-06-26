import { AxiosResponse } from "axios";
import ProductRepository from "../data/ProductRepository";
import { Product } from "../Product.model";

export class DeleteProductUseCase {
    private readonly _customerRepository: ProductRepository = new ProductRepository()
    async execute(id: number): Promise<AxiosResponse<void>> {
        return this._customerRepository.deleteProduct(id)
    }

}