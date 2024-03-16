import { RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
export const CartItem = ({ id, thumbnail, title, price }) => {
  const { removeFromCart } = useCart()
  return (
    <li key={id}>
      <img src={thumbnail} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty : 1</small>
        <button>+</button>
        <button onClick={() => removeFromCart(id)}><RemoveFromCartIcon /></button>
      </footer>
    </li>
  )
}
