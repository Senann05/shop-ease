import { useAppDispatch,useAppSelector } from "../app/hooks";
import { removeFromCart,increaseQuantity, decreaseQuantity,clearCart } from "../features/cart/cartSlice";
import "../style.css"

const Cart = ()=>{
    const dispatch= useAppDispatch()
    const cartItems= useAppSelector((state)=>state.cart.items)

    const totalPrice = cartItems.reduce(
        (total, item)=> total+ item.price *item.quantity,
        0
    )
    return(
        <div className="cart">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (<p>Cart is Empty</p>):
            (<><ul className="cart-items">
                {cartItems.map((item)=>(
                    <li key={item.id} className="cart-item">
                        <img src={item.thumbnail} alt={item.title} width={80}/>
                        <div className="info">
                            <h3>{item.title}</h3>
                            <p>{item.price}$</p>
                            <div className="quantity">
                                <button onClick={()=> dispatch(decreaseQuantity(item.id))}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={()=>dispatch(increaseQuantity(item.id))}>+</button>
                            </div>
                            <button className="remove" onClick={()=> dispatch(removeFromCart(item.id))}>Remove</button>
                        </div>
                    </li>
                ))}
         </ul>

         <div className="cart-summary">
            <h3>Total Price: {totalPrice.toFixed(2)}$</h3>
            <button className="clear" onClick={()=> dispatch(clearCart())}>Clear Cart</button>
         </div>
         </> 
        )}
    </div>
    )
}
export default Cart;