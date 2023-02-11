import React from "react";
import styles from "../../CSS/About.module.css";
export default function Heading(props) {
  return <div className={styles.head}>{props.children}</div>;
}
