import '../css/Cart.css'
import { useCart } from '../hooks/useCart'
import { CartIcon, ClearCartIcon } from './Icons'
import { CartItem } from './CartItem'

export function Cart () {
  const { cart, addToCart, clearCart } = useCart()

  return (
    <>
      <label htmlFor='cartCheck' className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id='cartCheck' hidden />
      <aside className='cart'>
        <ul>
          {
            cart.map(item => (
              <CartItem
                key={item.id}
                addToCart={() => { addToCart(item) }} {...item}
              />
            ))
        }
        </ul>
        <div className='cart-footer'>
          <button onClick={clearCart}><ClearCartIcon /></button>
        </div>
      </aside>
    </>
  )
}
