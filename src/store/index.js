import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ProductsSlice from './ProductsSlice'

const rootReducer = combineReducers({
    products: ProductsSlice
})

export const store = configureStore({
    reducer: rootReducer
})