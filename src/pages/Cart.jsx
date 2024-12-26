
import { useNavigate } from 'react-router-dom';


function Cart() {
  const navigate = useNavigate()

    return (
      <div>
        <h1>Shopping cart</h1>
        <p>Looks like you have no items in your basket currently.</p>
        <button onClick={() => navigate('/products/all')}>Continue Shopping</button>

      </div>
    );
  }
  
  export default Cart;