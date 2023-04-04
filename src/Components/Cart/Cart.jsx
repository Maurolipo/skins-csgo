import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import "./Cart.css";


const Cart = () => {

  const { cart, clearCart, getTotalPrice, deleteProductById } = useContext( CartContext)
  const precioTotal = getTotalPrice()
  return (
    <div style={{width: "100%", display: "flex", justifyContent: "space-evenly"}}>
        {
          cart.map( ( item )=> {
            return <div key={item.id}  style={{border: "2px solid black"}}>
              <h2>{item.title}</h2>
              <img src={item.img} alt="" style={{widht: "100px"}}/>
              <h3>Cantidad:{item.quantity}</h3>
              <h3>USD${item.price}</h3>
              <button onClick={() => deleteProductById(item.id)}>Eliminar</button>
            </div>
          } )
        }
        <h1>Coste total de la compra:USD${precioTotal}</h1>
        <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart