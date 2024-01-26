import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/data'

const Chekout = () => {

    const [pedidoId, setPedidoId] = useState("")
    const { cart, precioTotal, vaciarCart } = useContext(CartContext)
    const { register, handleSubmit } = useForm()

    const comprar = (info) => {
        const pedido = {
            cliente: info,
            productos: cart,
            total: precioTotal()
        }
        console.log(pedido)

        const pedidosRef = collection(db, "pedidos")
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCart()
            })
    }

    if (pedidoId) {
        return (
            <div className='contenedor'>
                <h1 className='titulo-h2'>Muchas gracias por tu compra</h1>
                <p className='margin'>Tu numero de pedido es:  {pedidoId}</p>
            </div>
        )
    }


    return (
        <div className='contenedor'>
            <h1 className='titulo-h2'>Finalizar compra</h1>
            <form className='formulario' onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder='ingresa tu nombre' {...register("nombre")} />
                <input type="text" placeholder='ingresa tu apellido'  {...register("apellido")} />
                <input type="email" placeholder='ingresa tu correo'  {...register("correo")} />
                <input type="phone" placeholder='ingresa tu numero telefonico'  {...register("celular")} />
                <button className='boton' type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default Chekout