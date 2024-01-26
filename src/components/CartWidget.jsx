import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {

  const  {cantidadEnCart} = useContext(CartContext)
  return (
    <span><i className="bi bi-cart3">{cantidadEnCart()}</i></span>
  )
}

export default CartWidget