import React, { useState, useEffect, useRef } from "react";
import styles from "./Checkout.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import envVars from "../../../config/environmentVars.js";
import notifcation from "../../../utils/Notification";

function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gradeLvl, setGradeLvl] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [socialMedia, setSocialMedia] = useState("");
  const [socialMediaHandle, setSocialMediaHandle] = useState("");
  const [meetUpLocation, setMeetUpLocation] = useState("");

  const form = useRef();

  const { item, price } = useParams();

  const calculatePrice = (price, quantity) => {
    return parseFloat(price) * parseFloat(quantity);
  }

  const sendToSheets = async () => {
    try {
      const customer = {
        firstName,
        lastName,
        item,
        gradeLvl,
        quantity,
        socialMedia: socialMedia === "" ? socialMedia : socialMedia,
        socialMediaHandle,
        meetUpLocation
      };

      const response = await axios.post(envVars.customersSheets, customer);
      console.log(response);
    } catch(err) {
      console.log(err);
    }
  }

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setGradeLvl(0);
    setQuantity(0);
    setSocialMedia("");
    setSocialMediaHandle("");
    setMeetUpLocation("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendToSheets();
    notifcation.sendEmail(form.current);
    clearForm();
  }

  return (
    <div className={styles.checkoutContainer}>
      <form ref={form} className={styles.formContainer}>
        <label className={styles.item}>{item}</label>
        <br />
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
        /><br />
        <label>Grade level: </label><br />
        <select className={styles.dropDown} name="grade level" value={gradeLvl} onChange={(e) => setGradeLvl(e.target.value)}>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
        <br />
        <label>Social Media: </label><br />
        <select className={styles.dropDown} value={socialMedia} onChange={(e) => setSocialMedia(e.target.value)}>
          <option value="choose">choose</option>
          <option value="instagram">instagram</option>
          <option value="snapchat">snapchat</option>
        </select>
        <br />
        <label>Social Media Handle:</label><br />
        <input
          type="text"
          name="social media handle"
          value={socialMediaHandle}
          onChange={(e) => setSocialMediaHandle(e.target.value)}
        /><br />
        <label>Meet Up Location:</label><br />
        <input
          type="text"
          name="meet up location"
          value={meetUpLocation}
          onChange={(e) => setMeetUpLocation(e.target.value)}
        /><br />
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="0"
        /><br />
        <p className={styles.price}>Total Price: ${calculatePrice(price, quantity)}</p>
        <br />
        <button className={styles.button} onClick={handleSubmit}>pre-order</button>
      </form>
    </div>
  )
}

export default Checkout;
