import React from 'react'
import ItemList from './itemList'


const ItemListContainer = ({}) => {

  const productos = [
    { id: 1, titulo: "producto A", descripcion: "descripcion del producto A", precio: 1000},          
    { id: 2, titulo: "producto B", descripcion: "descripcion del producto B", precio: 2000},   
    { id: 3, titulo: "producto C", descripcion: "descripcion del producto C", precio: 3000}      
  ]


  
  const mostrarProductos = new Promise((resolve, reject)=>{
    if (productos.length > 0) {
      setTimeout(()=>{
        resolve(productos)
      },3000)
    }else {
      reject("No se Obtuvieron productos")
    }
  })
  
  mostrarProductos
    .then((resultado)=>{
      console.log(resultado)
    })
    .catch((error)=>{
      console.log(error)
    })  
  
  
  
  
  return (
    <div className='contenedor'>
        <ItemList productos = {productos} />
    </div>
  )
}

export default ItemListContainer