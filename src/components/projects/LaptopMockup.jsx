import React from "react";
import styles from "../../CSS/LaptopMockup.module.css";
export const LaptopMockup = ({ children, src, hover }) => {
  console.log(src);
  return (
    <div>
      <div class={styles.macbook}>
        <div
          class={styles.screen}
          style={{
            opacity: !hover ? "100%" : "0%",
          }}
        >
          <div
            class={styles.viewport}
            style={{
              backgroundImage: `url(${src.src})`,
            }}
          ></div>
        </div>
        {children}
        <div
          style={{
            opacity: !hover ? "100%" : "0%",
          }}
          class={styles.base}
        ></div>
        <div
          style={{
            opacity: !hover ? "100%" : "0%",
          }}
          class={styles.notch}
        ></div>
      </div>
    </div>
  );
};
