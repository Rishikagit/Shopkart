import React, { useState, useEffect,useMemo,useCallback } from "react";
import ProductCard from "../Pages/ProductCard.jsx";

function Products() {
  const [products, setProducts] = useState([]);

  const filteredProducts = useMemo( () => {
    return products.filter ((p) => p.price >0 );
  }, [products]);

  const handleClick =useCallback ((title)=>{
    console.log(title);
  },[]);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  console.log("Products Parent rendered");

  return (
    <div>
      
      {filteredProducts.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
         onClick={()=> handleClick(item.title)}
        />
      ))}
    </div>
  );
}

export default Products;