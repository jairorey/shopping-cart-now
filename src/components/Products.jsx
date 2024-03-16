import '../css/Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const SomeProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='products'>
      <ul>
        {
        products.map(product => {
          const isProductInCart = SomeProductInCart(product)
          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>{product.title} - {product.price}</div>
              <div>
                {isProductInCart
                  ? <button onClick={() => removeFromCart(product)}><RemoveFromCartIcon /></button>
                  : <button onClick={() => addToCart(product)}><AddToCartIcon /></button>}
              </div>
            </li>
          )
        })
}
      </ul>
    </main>
  )
}
