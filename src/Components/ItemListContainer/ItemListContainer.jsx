import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import { SyncLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { products } from "../../productsMock";

const override = {
  display: "block",
  margin: "0 auto",
};

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  // const productosFiltrados = products.filter(
  //   (elemento) => elemento.category === categoryName
  // );

  useEffect(() => {
    // const productList = new Promise((resolve, reject) => {
    //   setTimeout(()=>{resolve(categoryName ? productosFiltrados : products);}, 2000)
      
    // });

    // productList
    //   .then((res) => {
    //     setItems(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const itemsCollection = collection(db, "products")
    const q = query(itemsCollection, where("category","==", categoryName))
    getDocs(q)
      .then( res=>{
        let products = res.docs.map( (product)=>{
          return {
            ...product.data(),
            id: product.id
          }
        })
        setItems(products)
      })
  }, [categoryName]);

  if( items.length === 0 ){
    return <div style={{display: "flex", justifyContent: "center",margin: "200px"}}><SyncLoader color="#d63636" cssOverride={override}/>
    </div>
  }
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
