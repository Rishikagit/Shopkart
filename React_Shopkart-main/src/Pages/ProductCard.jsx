import React, { useContext ,useState} from "react";
import { CartContext } from "../Pages/CardContext";

function ProductCard({title,image,price,onClick }) {
  const { dispatch } = useContext(CartContext);

  console.log("ProductCard CHILD rendered ");

  return (
    <div className="card">
      <img src={image} alt={title} />

      <h2>{title}</h2>

      <h2>${price}</h2>

      <button
        onClick={() => {
          onClick();
        
          dispatch({
            type: "ADD_TO_CART",
            payload: { title, image, price },
          });
        }}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default React.memo(ProductCard);