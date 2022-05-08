import React, { useState, useEffect } from "react";
import styles from "./BakerySelection.module.css";
import ItemCard from "../../common/ItemCard/ItemCard.js";
import axios from "axios";
import envVars from "../../../config/environmentVars.js";

function BakerySelection(){
  const [bakerySelection, setBackerySelection] = useState([]);

  useEffect(() => {
    const getBakeryItems = async () => {
      try {
        const response = await axios.get(envVars.bakeryItemsSheets);

        setBackerySelection(response.data);
      } catch(err) {
        console.error(err);
      }
    }

    getBakeryItems();
  }, [])

  return (
    <div className={styles.bakerySelectionContainer}>
      {bakerySelection.map(selection => <ItemCard item={selection.item} price={selection.price} imageUrl={selection.imageUrl}/>)}
    </div>
  )
}

export default BakerySelection;
