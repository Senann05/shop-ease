import { useAppDispatch,useAppSelector } from "../app/hooks";
import { removeFromCart,clearCart } from "../features/cart/cartSlice";
import type { Product } from "../types/product";
import "../style.css"

const Cart = ()=>{
    const dispatch= useAppDispatch()
    const cartItems= useAppSelector((state)=>state.cart.items)

    const totalPrice = cartItems.reduce((acc, item)=>acc+item.price, 0)
    return(
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (<p>Cart is Empty</p>):
            (<><ul className="cart-items">
                {cartItems.map((item: Product)=>(
                    <li key={item.id} className="cart-item">
                        <img src={item.thumbnail} alt={item.title} width={80}/>
                        <div className="info">
                            <h4>{item.title}</h4>
                            <p>{item.price}$</p>
                            <button onClick={()=>removeFromCart(item.id)}>Remove</button>
                        </div>
                    </li>
                ))}
         </ul>

         <div className="cart-summary">
            <h3>Total Price: {totalPrice.toFixed(2)}$</h3>
            <button className="clear" onClick={()=> dispatch(clearCart())}>🧹Clear Cart</button>
         </div>
         </> 
        )}
    </div>
    )
}
export default Cart;