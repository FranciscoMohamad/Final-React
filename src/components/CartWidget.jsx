import React from 'react'

const CartWidget = ({contador}) => {
  return (
    <button>{contador}<i class="bi bi-cart3"></i></button>
  )
}

export default CartWidget