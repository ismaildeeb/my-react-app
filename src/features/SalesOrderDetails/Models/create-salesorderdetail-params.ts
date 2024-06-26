import { Product } from '../../Products/Product.model';
export interface CreateSalesOrderDetailParams {
    SalesOrderLineNO: number,
    Product: Product,
    LinePrice: Number,
    LineNumberQTY: Number,
    LineTaxAmount: Number
}