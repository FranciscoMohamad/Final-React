import { createContext, useState } from "react"

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (producto, cantidad) => {
        const productoAgregado = { ...producto, cantidad }
        const newCart = [...cart]
        const inCart = newCart.find((producto) => producto.id === productoAgregado.id)

        if (inCart) {
            inCart.cantidad = inCart.cantidad + cantidad
        } else {
            newCart.push(productoAgregado)
        }
        setCart(newCart)
    }
    const cantidadEnCart = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }
    const vaciarCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={
            {
                cart,
                addToCart,
                cantidadEnCart,
                precioTotal,
                vaciarCart
            }}>
            {children}
        </CartContext.Provider>
    )
}