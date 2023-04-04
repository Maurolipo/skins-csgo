import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


const Cart = () => {

  const { cart, clearCart, getTotalPrice } = useContext( CartContext)
  const precioTotal = getTotalPrice()
  return (
    <div style={{width: "100%", display: "flex", justifyContent: "space-evenly"}}>
        {
          cart.map( ( elemento )=> {
            return <div style={{border: "2px solid black"}}>
              <h2>{elemento.title}</h2>
              <img src={elemento.img} alt="" style={{widht: "100px"}}/>
              <h3>Cantidad:{elemento.quantity}</h3>
              <h3>USD${elemento.price}</h3>
            </div>
          } )
        }
        <h1>Coste total de la compra:USD${precioTotal}</h1>
        <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart