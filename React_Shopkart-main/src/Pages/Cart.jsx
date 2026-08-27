import { useContext } from "react";
import { CartContext } from "../Pages/CardContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {state.cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        state.cart.map((item, index) => (
          <div key={index} className="cart-item">

            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>${item.price}</p>


            {/* REMOVE BUTTON */}
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: index,
                })
              }
            >
              Remove
            </button>

          </div>
        ))
      )}

     <button onClick={()=> navigate("/payment")}>
      Proceed to Payment
     </button>
    </div>
  );
}

export default Cart;