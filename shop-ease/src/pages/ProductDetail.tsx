import { useGetProductByIdQuery } from "../features/products/productApi";
import { useParams } from "react-router-dom";
// import { useAppDispatch } from "../app/hooks";
// import { addToCart } from "../features/cart/cartSlice";
import "../styles/productDetails.css"

const ProductDetail = ()=>{
    const {id }= useParams()
    // const dispatch = useAppDispatch()

    const {data:product, isLoading, error}= useGetProductByIdQuery(id!)
    if(isLoading)return <p>Loadimg...</p>
    if(error)return <p>Not Found Information...</p>

    return(
        <div className="product-details">
        <img src={product?.thumbnail} alt={product?.title} width={250} />
        <div className="info">
          <h2>{product?.title}</h2>
          <p>{product?.description}</p>
          <p>
            <strong>Price:</strong> {product?.price} $
          </p>
            <button>🛒 Add to Cart</button>
            </div>
            </div>
    )
};
export default ProductDetail;