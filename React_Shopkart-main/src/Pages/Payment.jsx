import { useContext } from "react";
import { CartContext } from "../Pages/CardContext";
import { useNavigate } from "react-router-dom";

function Payment() {
    const navigate = useNavigate();

  console.log("1. Payment component is rendering");

  const { state, dispatch } = useContext(CartContext);

  console.log("2. Data received from CartContext:", state);

  const total = state.cart.reduce((acc, item) => {

    console.log("Current acc value:", acc);
    console.log("Current item:", item);
    console.log("Current item price:", item.price);

    const newTotal = acc + item.price;

    console.log("New acc value:", newTotal);

    return newTotal;
  }, 0);
  console.log(" Final Total:", total);
  const handlePayment = () => {
    alert("Payment Successful");
    dispatch({ type: "CLEAR_CART" });
    navigate("/success");
  };
  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Payment</h2>
        <p>Total Amount: ₹{total.toFixed(2)}</p>
        <input placeholder="Card Number" />
        <br />
        <input placeholder="Card Holder Name" />
        <br />
        <input placeholder="Expiry Date" />
        <br />
        <input placeholder="CVV" />
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
}

export default Payment;

