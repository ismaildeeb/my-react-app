import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import sliceCore from "../core/sliceCore";
export const index = configureStore({
    reducer: {
        products: productSlice,   
        core : sliceCore
    },
});

export type AppState = ReturnType<typeof index.getState>

