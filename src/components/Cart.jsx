import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

  const { cart, precioTotal, vaciarCart } = useContext(CartContext)

  const handleVaciar = () => {
    vaciarCart()
  }

  return (
    <div className='contenedor'>
      <h1 className='titulo-h1'>CARRITO</h1>
      {
        cart.map((prod) => (
          <div className='contenedor' key={prod.id}>
            <h3 className='titulo'>{prod.titulo}</h3>
            <div className='compra-info'>
              <p className='precio'>Cant: {prod.cantidad}</p>
              <p className='precio'>Precio unit: ${prod.precio}</p>
              <p className='precio'>Precio total: ${prod.precio * prod.cantidad}</p>
            </div>
          </div>
        ))
      }

      {
        cart.length > 0 ?
          <>
            <h2>Precio Total: ${precioTotal()}</h2>
            <button className='vaciar' onClick={handleVaciar}>Vaciar</button>
            <Link className='finalizar-compra' to="/chekout" >Finalizar compra</Link>
          </> :
          <h2>El Carrito esta Vacio</h2>
      }

    </div>
  )
}

export default Cart