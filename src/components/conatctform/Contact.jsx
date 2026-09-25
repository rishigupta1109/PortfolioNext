import style from "../../CSS/Contact.module.css";

import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import ContactDetails from "../global/ContactDetails";
import Heading from "../global/Heading";

const Contact = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  var firebaseConfig = {
    apiKey: "AIzaSyB9pcJ-AVbXxKXPJ_sredOiwcffFRtxAXw",
    authDomain: "portfolio-99e39.firebaseapp.com",
    databaseURL: "https://portfolio-99e39-default-rtdb.firebaseio.com",
    projectId: "portfolio-99e39",
    storageBucket: "portfolio-99e39.appspot.com",
    messagingSenderId: "845584493595",
    appId: "1:845584493595:web:0e2b7b98c5b2ffb6f95cbe",
    measurementId: "G-ZL4S0WCSDH",
  };
  const app = initializeApp(firebaseConfig);

  // Get a reference to the database service
  const db = getDatabase(app);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      !email.trim().includes("@") ||
      !email.trim().includes(".") ||
      message.trim() === ""
    ) {
      setStatus({ type: "error", text: "Fill in every field with a valid email." });
      return;
    }
    setSubmitting(true);
    try {
      await set(ref(db, "contactForm/" + name), {
        username: name,
        email: email,
        message: message,
      });
      setStatus({ type: "success", text: "Message sent. I will get back to you soon." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus({ type: "error", text: "Could not send that. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div data-aos="fade-up" className={style.contactsection}>
      <Heading>const contactMe;</Heading>
      <div className={style.row}>
        <form className={style.form} onSubmit={submitHandler}>
          <h2>Connect with me on</h2>
          <ContactDetails />
          <h2>Drop me a message</h2>
          <div className={style.column}>
            <div
              className={style.row}
              style={{ width: "100%", justifyContent: "space-between" }}
            >
              <label htmlFor="name">let name = </label>
              <input
                value={name}
                onChange={nameChangeHandler}
                type="text"
                name="name"
                id="name"
                autoComplete="name"
              />
            </div>
            <div
              className={style.row}
              style={{ width: "100%", justifyContent: "space-between" }}
            >
              <label htmlFor="email">let email = </label>
              <input
                value={email}
                onChange={emailChangeHandler}
                type="email"
                inputMode="email"
                spellCheck={false}
                name="email"
                id="email"
                autoComplete="email"
              />
            </div>
            <div
              className={style.row}
              style={{ width: "100%", justifyContent: "space-between" }}
            >
              <label htmlFor="message">let message = </label>
              <input
                type="text"
                value={message}
                onChange={messageChangeHandler}
                name="message"
                id="message"
                autoComplete="off"
              ></input>
            </div>
          </div>
          {status && (
            <div
              role="status"
              aria-live="polite"
              className={
                status.type === "error" ? style.errorMsg : style.successMsg
              }
            >
              {status.text}
            </div>
          )}
          <button type="submit" className={style.NeonBtn} disabled={submitting}>
            {submitting ? "Sending…" : "Drop message"}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </form>
        <div className={style.details}>
          <h2>Find me here</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.99959755832!2d75.72513511242511!3d22.723595083911356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2z4KSH4KSo4KWN4KSm4KWM4KSwLCDgpK7gpKfgpY3gpK8g4KSq4KWN4KSw4KSm4KWH4KS2!5e0!3m2!1shi!2sin!4v1635579838739!5m2!1shi!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contact;
