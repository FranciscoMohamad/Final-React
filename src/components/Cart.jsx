import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {

  const {cart, precioTotal, vaciarCart} = useContext(CartContext)

    const handleVaciar = () => {
      vaciarCart()
    }

  return (
    <div>
      <h1>CARRITO</h1>
      {
        cart.map((prod)=>(
          <div key={prod.id}>
            <br />
            <h3>{prod.titulo}</h3>
            <p>Cant: {prod.cantidad}</p>
            <p>Precio unit: ${prod.precio}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
            <br />
          </div>
        ))
      }

      {
        cart.length > 0 ?
        <>
        <h2>Precio Total: ${precioTotal()}</h2>
        <button onClick={handleVaciar}>Vaciar</button>
        </>:
        <h2>El Carrito esta Vacio</h2>
      }

    </div>
  )
}

export default Cart