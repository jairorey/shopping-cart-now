export const cartInitialState = []

export const cartReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_TO_CART': {
      const { id } = payload
      const productInCart = state.findIndex(item => item.id === id)
      if (productInCart >= 0) {
        const newCart = structuredClone(state)
        newCart[productInCart].quantity += 1
        newCart(newCart)
      }
      return [
        ...state,
        {
          ...payload,
          quantity: 1
        }
      ]
    }

    case 'REMOVE_FROM_CART': {
      return state.filter(item => item.id !== payload)
    }

    case 'CLEAR_CART': {
      return cartInitialState
    }
    default:
      break
  }
  return state
}
