import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {getDoc, collection, doc} from "firebase/firestore"
import { db } from "../../firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const {agregarAlCarrito, getQuantityById} = useContext( CartContext)

  const [productSelected, setProductSelected] = useState({})

  useEffect(()=>{
      const itemsCollection = collection(db, "products")
      const ref= doc( itemsCollection, id )
      getDoc(ref)
        .then( res => {
          setProductSelected=({
            ...res.data(),
            id: res.id
          })
        })
  },[id])

  // const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad)=>{

    let producto = {
      ...productSelected,
      quantity: cantidad
    }
    
    agregarAlCarrito(producto)

  }
    let quantity = getQuantityById(Number(id))

  return (
    <div>
      <h1>{productSelected.title}</h1>
      <img src={productSelected.img} alt="" />
      <ItemCount stock={productSelected.stock} onAdd={onAdd} initial={quantity} />
    </div>
  );
};

export default ItemDetailContainer;
