import React from "react";
import styles from "../../CSS/MobileMockup.module.css";
export const MobileMockup = ({ children, src, hover }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div
        class={styles.mobile_phone}
        style={{
          opacity: !hover ? "100%" : "0%",
        }}
      >
        <div class={styles.brove}>
          <span class={styles.speaker}></span>
        </div>
        <div
          class={styles.screen}
          style={{
            backgroundImage: `url(${src.src})`,
          }}
        ></div>
      </div>
      {children}
    </div>
  );
};
