import React from "react";
import styles from "../../CSS/About.module.css";
export default function Heading(props) {
  const sentence = props.children;
  const words = sentence.split(" ");
  return (
    <div className={styles.head}>
      <p>{words[0]}</p>
      <p>{words[1]}</p>
    </div>
  );
}
