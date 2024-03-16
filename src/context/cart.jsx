import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = (id) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: id
  })

  const clearCart = product => dispatch({
    type: 'CLEAR_CART'
  })

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
