import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../features/Products/Product.model'
import { GetProductUseCase } from '../../features/Products/usecases/get-products-usecase'
import { showError } from '../../core/sliceCore'
type ProductLoading = {
    fetch: boolean,
    find: boolean,
    create: boolean,
    update: boolean,
    delete: boolean
}

interface ProductState {
    products: Product[],
    isLoading: ProductLoading,
    error?: string
}

const initialState: ProductState = {
    products: [],
    isLoading: {
        fetch: false,
        find: false,
        create: false,
        update: false,
        delete: false
    },
    error: undefined
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // setLoading(state, action: PayloadAction<{ type: keyof ProductLoading, value: boolean }>) {
        //     state.isLoading[action.payload.type] = action.payload.value
        // },

        // getProductsSuccess(state, action: PayloadAction<Product[]>) {
        //     state.products = action.payload
        // },

        // craeteProductSuccess(state, action: PayloadAction<Product>) {
        //     state.products.push(action.payload)
        // },

        // createProductFailure(state, action: PayloadAction<string>) {
        //     state.error = action.payload
        // }
    }

})

export const {
    // setLoading,
    // getProductsSuccess,
    // craeteProductSuccess,
    // createProductFailure
} = productSlice.actions;

// export const fetchProducts = createAsyncThunk<void, void, {}>(
//     'products/fetchProducts',
//     async (_,{ dispatch }) => {
//         try {
//             dispatch(setLoading({ type: 'fetch', value: true }))
//             const usecase: GetProductUseCase = new GetProductUseCase()
//             const response = await usecase.execute()

//             if (response.status === 200) {
//                 dispatch(getProductsSuccess(response.data))
//             }
//             else {
//                 dispatch(productSlice.actions.createProductFailure('Failed to fetch data'))
//             }
//         } catch (error: any) {
//             if (error.code === 'ERR_NETWORK') {
//                 dispatch(showError({ message: 'Check your internet connection' }))
//             } else {
//                 dispatch(showError({ message: 'Something went wrong' }))
//             }
//         } finally {
//             dispatch(setLoading({ type: 'fetch', value: false }))
//         }
//     }
// )

export default productSlice.reducer
