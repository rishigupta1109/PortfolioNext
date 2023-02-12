import style from "../../CSS/Skills.module.css";
import cppIcon from "../../resources/cpp_icon.png";
import htmlIcon from "../../resources/HTML5_logo.svg.png";
import cssIcon from "../../resources/CSS3_logo.svg.png";
import jsIcon from "../../resources/js_icon.png";
import reactIcon from "../../resources/React-icon.svg.png";
import nodejsIcon from "../../resources/icons8-nodejs-480.png";
import nextjsIcon from "../../resources/next.png";
import expressJSICon from "../../resources/images.png";
import mongodbIcon from "../../resources/icons8-mongodb-480.png";
import Heading from "../global/Heading";
import Image from "next/image";

const Skills = () => {
  const arr = [
    {
      img: cppIcon,
      class: style.cpp,
    },
    {
      img: htmlIcon,
      class: style.html,
    },
    {
      img: cssIcon,
      class: style.css,
    },
    {
      img: jsIcon,
      class: style.js,
    },
    {
      img: reactIcon,
      class: style.reactic,
    },
    {
      img: mongodbIcon,
      class: style.mongo,
    },
    {
      img: expressJSICon,
      class: style.express,
    },
    {
      img: nodejsIcon,
      class: style.nodejs,
    },
    {
      img: nextjsIcon,
      class: style.nextjs,
    },
  ];
  return (
    <div data-aos="fade-up" className={style.skillcontainer}>
      <Heading>let skillsStack;</Heading>
      <div className={style.skillsection}>
        {arr.map((skill) => {
          return (
            <div className={style.skillcircle}>
              <div className={style.outer}>
                <div className={style.inner}>
                  <Image height={100} src={skill.img} alt="" />
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="240px"
                height="240px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#09ceff" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  className={skill.class}
                  cx="120"
                  cy="120"
                  r="110"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
