import React, { useState, useEffect } from "react";
import styles from "./BakerySelection.module.css";
import ItemCard from "../../common/ItemCard/ItemCard.js";

const BAKERY_SELECTION = [
  {
    item: "tres leches",
    price: "$10"
  },
  {
    item: "brownie",
    price: "$10"
  },
  {
    item: "brownie",
    price: "$10"
  },
  {
    item: "brownie",
    price: "$10"
  },
  {
    item: "brownie",
    price: "$10"
  },
  {
    item: "brownie",
    price: "$10"
  },
  {
    item: "brownie",
    price: "$10"
  },
  {
    item: "brownie",
    price: "$10"
  },
  {
    item: "brownie",
    price: "$10"
  },
  {
    item: "brownie",
    price: "$10"
  },
  {
    item: "brownie",
    price: "$10"
  },
]

function BakerySelection(){
  const [bakerySelection, setBackerySelection] = useState(BAKERY_SELECTION);

  return (
    <div className={styles.bakerySelectionContainer}>
      {bakerySelection.map(selection => <ItemCard item={selection.item} price={selection.price} />)}
    </div>
  )
}

export default BakerySelection;
