import { useGetSingleProductQuery } from "../features/products/productApi";
import { useParams } from "react-router-dom";
import "../styles/productDetails.css"

const ProductDetail = ()=>{
    const {id }= useParams<{id: string}>()

    const {data, isLoading, error}= useGetSingleProductQuery(id!)
    if(isLoading)return <p>Loadimg...</p>
    if(error || !data)return <p>Not Found Information...</p>

    return(
        <div className="product-details">
            <img src={data.thumbnail} alt={data.title}/>
            <div className="product-info">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <p className="price">{data.price}$</p>
                <button>🛒 Add to Cart</button>
            </div>
        </div>
    )
};
export default ProductDetail;