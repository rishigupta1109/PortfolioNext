import React from "react";
import styles from "../../CSS/LaptopMockup.module.css";
export const LaptopMockup = ({ children, src, hover }) => {
  console.log(src);
  return (
    <div>
      <div class={styles.macbook}>
        <div class={styles.screen}>
          <div
            class={styles.viewport}
            style={{
              backgroundImage: `url(${src.src})`,
            }}
          ></div>
        </div>
        {children}
        <div class={styles.base}></div>
        <div class={styles.notch}></div>
      </div>
    </div>
  );
};
