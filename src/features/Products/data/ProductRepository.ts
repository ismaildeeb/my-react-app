import { AxiosResponse } from "axios";
import { Product } from "../Product.model";
import { IProductRepository } from "./IProductRepository";
import axiosIns from "../../../plugin/axios";
import { CreateProductParams } from "../Models/create-product-params";

class ProductRepository implements IProductRepository {

    private readonly _endpoint = 'Product'


    async GetProducts(): Promise<AxiosResponse<Product>> {
        return await axiosIns.get<Product>(this._endpoint)
    }
    async getProduct(id: number): Promise<AxiosResponse<Product>> {
        return await axiosIns.get<Product>(`${this._endpoint}/${id}`)
    }
    async createProduct(product: CreateProductParams): Promise<AxiosResponse<Product>> {
        return await axiosIns.post<Product>(this._endpoint, product)
    }
    async updateProduct(product: Product): Promise<AxiosResponse<Product>> {
        return await axiosIns.put<Product>(this._endpoint, product)
    }
    async deleteProduct(id: number): Promise<AxiosResponse<void>> {
        return await axiosIns.delete<void>(`${this._endpoint}/${id}`)
    }

}

export default ProductRepository