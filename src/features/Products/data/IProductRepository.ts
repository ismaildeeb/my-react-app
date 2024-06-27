import { AxiosResponse } from "axios";
import { Product } from "../Product.model";
import { CreateProductParams } from "../Models/create-product-params";

export interface IProductRepository {
    GetProducts(): Promise<AxiosResponse<Product[]>>
    getProduct(id: number): Promise<AxiosResponse<Product>>
    createProduct(product: CreateProductParams): Promise<AxiosResponse<Product>>
    updateProduct(product: CreateProductParams, id: number): Promise<AxiosResponse<Product>>
    deleteProduct(id: number): Promise<AxiosResponse<void>>
}