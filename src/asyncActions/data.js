import { categoriesHome, categoriesHomeList, categoriesList, categoriesProducts, homeItemContent, productItem, productsList, saleProducts,  } from "../store/ProductsSlice";

export function fetchCategories(){
    return function(dispatch){
        fetch('http://localhost:3333/categories/all')
            .then(res => res.json())
            .then(data => dispatch(categoriesList(data)));
    }
}

export function fetchHomeCategories(){
    return function(dispatch){
        fetch('http://localhost:3333/categories/all')
            .then(res => res.json())
            .then(data => dispatch(categoriesHomeList(data)));
    }
}

export function fetchProductsFromCategori(categoryId){
    return function(dispatch){
        //fetch('http://localhost:3333/products/all  categori => categori.categoryId === categoryId')

        fetch('http://localhost:3333/categories/'+categoryId)
            .then(res => res.json())
            .then(data => dispatch(categoriesProducts(data.data.map(data => ({...data, isShow:true, isInCart:false})))
            ));
    }
}


export function fetchSaleProducts(){
    return function(dispatch){
        fetch('http://localhost:3333/products/all ')
            .then(res => res.json())
            .then(data => dispatch(saleProducts(data.filter(product => product.discont_price != null ).map(product => ({...product, isShow:true, isInCart:false}))))
            );
    }
}

export function fetchSaleForHomeProducts(){
    return function(dispatch){
        fetch('http://localhost:3333/products/all ')
            .then(res => res.json())
            .then(data => dispatch(homeItemContent(data.filter(product => product.discont_price != null )
            )));
    }
}

export function fetchAllProducts(){
    return function(dispatch){
        fetch('http://localhost:3333/products/all ')
            .then(res => res.json())
            .then(data => dispatch(productsList(data.map(product => ({...product, isShow:true, isInCart:false})))))

    }
}

export function fetchProductsById(id){
    return function(dispatch){
        fetch("http://localhost:3333/products/"+id)
            .then(res => res.json())
            .then(data => dispatch(productItem(data)));
    }
}
