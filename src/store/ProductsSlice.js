import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    category:[],
    product: [],
    productsOnPage:[], //в экшене где получение данных предусмотреть свойство из шоу по умолчанию труе менять в филтрации его
    cart:{
        productList:[],
        totalCount: 0,
        totalSum: 0,
    }
}

const productsSlice = createSlice({
    name: 'products',
    initialState, 
    reducers: {
        homeItemContent(state, action){
            state.data = action.payload.slice(0, 4)
        },
        categoriesProducts(state, action){
            state.data = action.payload
        },         
        categoriesList(state, action){
            state.category = action.payload
        },
        categoriesHomeList(state, action){
            state.category = action.payload.slice(0, 4)
        },
        productsList(state, action){
            state.data = action.payload
        },
        productItem(state, action){
            state.product = action.payload
        },
        saleProducts(state, action){
            state.data = action.payload
        },

        // filterProductsByMinPrice(state, action) {
                        
        //     const updatedData = state.data.map(product => {
        //     return {
        //         ...product, isShow: product.price >= action.payload
        //         };
        //     });
        //     return {
        //         ...state,
        //         data: updatedData
        //     };
        // },
        

        filterProductsByMinPrice(state, action){
            state.data = state.data.map(product => {
            return {
                ...product, isShow: product.price >= action.payload
                };
            });
            // return {
            //     ...state,
            //     data: updatedData
            // };
        // state.data.map(product => ({...product, isShow: product.price >= action.payload}))

            // if (state.data.map(product => product.price >= action.payload))
            // {
            //     (state.data.map(product => product.isShow = true))
            // } else{ 
            //     (state.data.map(product => product.isShow = false))
            // }
            // state.data = state.data.filter(product => product.price >= action.payload )
        },

        filterProductsByMaxPrice(state, action){
            // state.data = state.data.filter(product => product.price <= action.payload )
            state.data = state.data.map(product => {
                return {
                    ...product, isShow: product.price <= action.payload
                    };
                });
            },

        filterProductsByDiscount(state, action){
            // state.data = state.data
            // console.log('isShow000')

            // console.log(state.data)

            // if(state.data.discont_price != null )
            // {
            //     console.log('isShow110')
            //     state.product.isShow = false
            // }
            // state.data = state.data.filter(product => product.discont_price != null )

            state.data = state.data.map(product => {
                return {
                    ...product, isShow: product.discont_price != null
                    };
                });
            },

        
        sortProductsByMinPrice(state){
             
            state.data = state.data.sort((a,b) => a.price - b.price)

        },
        sortProductsByMaxPrice(state){
            state.data = state.data.sort((a,b) => b.price - a.price )

        },
        sortProductsByDate(state){
            state.data = state.data.sort((a,b) => new Date(a.createAt) - new Date(b.createAt) )

        },
        sortProductsById(state){
            state.data = state.data.sort((a,b) => a.id - b.id )

        },
        addToCart(state){
            //изменить состояние в корзине(?) по id на true
            // state.cart.productList 
            // state.cart.productList.map(productList => ({...productList, action.payload}))
            // state.cart.productList = state.data.map(product => {
            state.cart.productList = state.product.map(product => {

                console.log('productAdded')

                return {
                    ...product, isInCart: true
                    };

                });
        }
    }
})

export default productsSlice.reducer

export const {
    categoriesList,
    categoriesHome,
    categoriesProducts,
    productsList,
    productItem,
    saleProducts,
    homeItemContent,
    categoriesHomeList,
    filterProductsByDiscount,
    filterProductsByPrice,
    filterProductsByMinPrice,
    filterProductsByMaxPrice,
    sortProductsByMinPrice,
    sortProductsByMaxPrice,
    sortProductsByDate,
    sortProductsById,
    addToCart

    
} = productsSlice.actions