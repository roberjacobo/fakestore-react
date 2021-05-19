import React, { useState, useEffect } from "react";
import Product from "../components/product";
import axios from "axios";

export default function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        const allProducts = res.data;
        setProducts(allProducts);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      <div className="catalog">
        {products.map((element) => (
          <Product
            key={element.id}
            title={element.title}
            price={element.price}
            description={element.description}
            category={element.category}
            image={element.image}
          />
        ))}
      </div>
    </>
  );
}