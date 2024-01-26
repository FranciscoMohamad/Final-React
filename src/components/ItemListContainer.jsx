import { useState } from 'react'
import ItemList from '../itemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../firebase/data"

const ItemListContainer = ({ }) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams()
  const productosRef = collection(db, "productos")
  getDocs(productosRef)
    .then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
      )

    })

  const filtrarProductos = productos.filter((producto) => producto.categoria == categoriaId)

  return (
    <div className='contenedor'> {
      categoriaId ? <ItemList productos={filtrarProductos} /> : <ItemList productos={productos} />
    }
    </div>
  )
}

export default ItemListContainer