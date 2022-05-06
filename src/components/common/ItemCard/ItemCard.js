import React from "react";
import styles from "./ItemCard.module.css";
import cake from "../../../images/cake.png";

function ItemCard(props) {
  return (
    <div className={styles.itemCardContainer}>
      <img className={styles.itemCardImage} src={cake}/>
      <p>{props.item}</p>
      <p>{props.price}</p>
      <button className={styles.orderButton}>order</button>
    </div>
  )
}

export default ItemCard;
