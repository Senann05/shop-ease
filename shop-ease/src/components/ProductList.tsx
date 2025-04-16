
import { useGetAllProductsQuery } from '../features/products/productApi'
import { useAppDispatch } from '../app/hooks'
import { addToCart } from '../features/cart/cartSlice'

const ProductList = () => {
  const { data, isLoading, error } = useGetAllProductsQuery()
  const dispatch = useAppDispatch();

  if (isLoading) return <p>Yüklənir...</p>
  if (error) return <p>Xəta baş verdi</p>

  return (
    <div className="product-list">
      {data?.products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.thumbnail} alt={product.title} width={150} />
          <h3>{product.title}</h3>
          <p>{product.price}$</p>
          <button onClick={() => dispatch(addToCart(product)) } > 🛒 Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
