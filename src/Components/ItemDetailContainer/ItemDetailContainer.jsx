import React from "react";

import { useParams } from "react-router-dom";

import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const {agregarAlCarrito} = useContext( CartContext)

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad)=>{

    let producto = {
      ...productSelected,
      quantity: cantidad
    }
    
    agregarAlCarrito(producto)

  }

  return (
    <div>
      <h1>{productSelected.title}</h1>
      <img src={productSelected.img} alt="" />
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
