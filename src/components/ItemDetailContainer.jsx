import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = ({}) => {
  
  const {id} = useParams()

  const productos = [
    { id: 1, titulo: "REMERA", descripcion: "descripcion del la remera", precio: 1000, categoria: "ropa"},          
    { id: 2, titulo: "PANTALON", descripcion: "descripcion del pantalon", precio: 2000, categoria: "ropa"},   
    { id: 3, titulo: "GORRA", descripcion: "descripcion del la gorra", precio: 3000, categoria: "ropa"},
    { id: 4, titulo: "ARITOS", descripcion: "descripcion del los aritos", precio: 4000, categoria: "joyeria"},
    { id: 5, titulo: "COLLAR", descripcion: "descripcion del collar", precio: 5000, categoria: "joyeria"},
    { id: 6, titulo: "ANILLO", descripcion: "descripcion del anillo", precio: 4000, categoria: "joyeria"},
    { id: 7, titulo: "PS5", descripcion: "descripcion del la ps5", precio: 5000, categoria: "electronica"},
    { id: 8, titulo: "LAPTOP", descripcion: "descripcion del la laptop", precio: 9000, categoria: "electronica"},
    { id: 9, titulo: "HELADERA", descripcion: "descripcion del la heladera", precio: 3000, categoria: "electronica"},      
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

  const filtrarProducto = productos.find((producto)=> producto.id ==id )
  console.log(filtrarProducto)
  
  return (
    <div>      
          <ItemDetail
              producto={filtrarProducto}
          />
    </div>
  )
}

export default ItemDetailContainer