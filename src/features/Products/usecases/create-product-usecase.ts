import { Product } from '../Product.model';
import { CreateProductParams } from '../Models/create-product-params'
import ProductRepository from '../data/ProductRepository'
import { AxiosResponse } from "axios";



export class CreateProductUseCase {
    private readonly _productRepository: ProductRepository = new ProductRepository()

    async execute(product: CreateProductParams): Promise<AxiosResponse<Product>> {
        return this._productRepository.createProduct(product)
    }
}
