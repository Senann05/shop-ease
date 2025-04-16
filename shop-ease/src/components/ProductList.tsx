
import { useGetAllProductsQuery } from '../features/products/productApi'
import { Product} from "../types/product"

const ProductList = () => {
  const { data, isLoading, error } = useGetAllProductsQuery()

  if (isLoading) return <p>Yüklənir...</p>
  if (error) return <p>Xəta baş verdi</p>

  return (
    <div className="product-list">
      {data?.products.map((product: Product) => (
        <div className="product" key={product.id}>
          <img src={product.thumbnail} alt={product.title} width={150} />
          <h3>{product.title}</h3>
          <p>{product.price}$</p>
          <button>🛒 Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
