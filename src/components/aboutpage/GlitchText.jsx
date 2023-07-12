import React, { useEffect, useState } from "react";
import style from "../../CSS/About.module.css";
export const GlitchText = ({ text: t }) => {
  const [text, setText] = useState("");
  //code to animate text to change each letter randomly and then settle to the original text.
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const randomCharList = [
        "*",
        "#",
        "@",
        "!",
        "R",
        "i",
        "s",
        "h",
        "i",
        "G",
        "u",
        "p",
        "t",
        "a",
      ];
      const randomChar = randomCharList[Math.floor(Math.random() * 14)];
      setText(t.substring(0, i) + randomChar);
      i++;
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      setText(t);
    }, 1400);
  }, []);
  return (
    <div data-aos="fade-left" className={style.name}>
      {text}
    </div>
  );
};
