import React from "react";
import styles from "./ItemCard.module.css";
import cake from "../../../images/cake.png";

import { useNavigate } from "react-router-dom";

function ItemCard(props) {
  const navigate = useNavigate();
  return (
    <div className={styles.itemCardContainer}>
      <img className={styles.itemCardImage} src={cake}/>
      <p>{props.item}</p>
      <p>{props.price}</p>
      <button className={styles.orderButton} onClick={() => navigate(`/form/${props.item}/${props.price}`)}>order</button>
    </div>
  )
}

export default ItemCard;
