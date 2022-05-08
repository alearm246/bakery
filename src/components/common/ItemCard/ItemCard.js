import React from "react";
import styles from "./ItemCard.module.css";
import cake from "../../../images/cake.png";

import { useNavigate } from "react-router-dom";

function ItemCard(props) {
  const navigate = useNavigate();
  return (
    <div className={styles.itemCardContainer} onClick={() => navigate(`/form/${props.item}/${props.price}`)}>
      <div className={styles.heroImageContainer}>
        <img className={styles.itemCardImage} src={props.imageUrl}/>
      </div>
      <div className={styles.dataContainer}>
        <p className={styles.item}>{props.item}</p>
        <p className={styles.price}>price: ${props.price}</p>
        <button className={styles.orderButton} onClick={() => navigate(`/form/${props.item}/${props.price}`)}>order</button>
      </div>
    </div>
  )
}

export default ItemCard;
