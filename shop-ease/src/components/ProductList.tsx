// import type { Product } from '../types/type'
import { useGetAllProductsQuery } from '../features/products/productApi'
import { useAppDispatch } from '../hooks/useAppDispatch' 
import { useAppSelector } from '../hooks/useAppSelector'
import { addToCart } from '../features/cart/cartSlice'
import "../styles/pl.css"

const ProductList = () => {
  const { data, isLoading, error } = useGetAllProductsQuery()
  const dispatch = useAppDispatch();
  const token = useAppSelector((state)=> state.auth.token)

  if (isLoading) return <p>Yüklənir...</p>
  if (error) return <p>Xəta baş verdi</p>

  return (
    <div className="product-list">
      {data?.products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.thumbnail} alt={product.title} width={150} />
          <h3>{product.title}</h3>
          <p>{product.price}$</p>
          {token ? (
            <button onClick={() => dispatch(addToCart(product))}>
              🛒Add To Cart
            </button>
          ) : (
            <p>🔒 Login fot Add</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProductList
