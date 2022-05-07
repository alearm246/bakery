import React, { useState, useEffect } from "react";
import styles from "./Checkout.module.css";
import { useParams } from "react-router-dom";

function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gradeLvl, setGradeLvl] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const { item, price } = useParams();

  const calculatePrice = (price, quantity) => {
    const priceNum = parseInt(price.substring(1, price.length + 1));
    return priceNum * parseInt(quantity);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.checkoutContainer}>
      <form className={styles.formContainer}>
        <label>{item}</label>
        <label>First name:</label><br />
        <input
          type="text"
          name="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        /><br />
        <label>Last name:</label><br />
        <input
          type="text"
          name="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Grade level: </label><br />
        <input
          type="number"
          name="grade level"
          value={gradeLvl}
          onChange={(e) => setGradeLvl(e.target.value)}
        />
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <p>total price: {calculatePrice(price, quantity)}</p>
        <button className={styles.button} onClick={handleSubmit}>pre-order</button>
      </form>
    </div>
  )
}

export default Checkout;
