import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchProductsById } from "../asyncActions/data"
import { addToCart } from "../store/ProductsSlice"

function ProductItemPage() {

const productData = useSelector(store => store.products.product)


const dispatch = useDispatch()
const navigate = useNavigate()

// useEffect(() => {
//   dispatch(fetchProductsById(1))

//  },[])


return (
    <div>
      
      
        <ul >
          {productData.map(data => (
            <li 
            className="productsItem"
              key={data.id}
            >
            <img width={100} src={'http://localhost:3333'+data.image}/>
             
             <div className="productInfo"> 
                <h3> {data.title} </h3> 
                <h2> ${data.price} </h2>
                <h2>$ {data.discont_price}</h2>
                <div className="countner">
                  <button >+</button>
                  <p>num1</p>
                  <button>-</button>
                  <button onClick={() => dispatch(addToCart())}> Add to cart </button> 
                  {/* колличество из счетчика , счетчик может быть обычным состоянием, если продукта в корзине не существует добавляем продукт как новый элемент массива, если есть увеличеваем количество в продукте, проверка вс редьюсере */}
                  
                </div>
                
                <h4> Description </h4>
                <p> {data.description}</p>
                

             </div>
            

            </li>
          ))}
        </ul>
        



      </div>
    );
  }
  
  export default ProductItemPage;