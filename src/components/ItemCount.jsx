import React from 'react'

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {

  return (
    <div>

      <div className="item-count">
        <button className='menos' onClick={handleRestar}>-</button>
        <p className='cantidad'>{cantidad}</p>
        <button className='mas' onClick={handleSumar}>+</button>
      </div>
      <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount