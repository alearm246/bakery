import React from "react";
import styles from "./ItemCard.module.css";

function ItemCard(props) {
  return (
    <div>
      <p>{props.item}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default ItemCard;
