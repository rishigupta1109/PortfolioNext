import Image from "next/image";
import style from "../../CSS/ProjectCard.module.css";
import { useEffect, useState } from "react";
// import CodeIcon from "@mui/icons-material/Code";
// import LinkIcon from "@mui/icons-material/Link";
import LinkIcon from "../../resources/linksvg.svg";
import CodeIcon from "../../resources/code.svg";
import { LaptopMockup } from "./LaptopMockup";
import { MobileMockup } from "./MobileMockup";
const Front = (props) => {
  return (
    <div
      className={style.front}
      style={{
        opacity: props.show ? "100%" : "0",
      }}
    >
      <Image src={props.img} alt={props.name} className={style.img} />
      {/* <h2>{props.name}</h2> */}
    </div>
  );
};
const Back = (props) => {
  // console.log(props.link);
  let btn1name = props.hosted ? "Visit Site" : "View Overview";
  return (
    <div
      style={{
        opacity: props.show ? "100%" : "0%",
        top: props.show ? "0%" : "100%",
      }}
      className={style.back}
    >
      <h1>{props.name}</h1>
      <p>{props.details}</p>
      <div>
        <a
          target="_blank"
          className={style.NeonBtn}
          href={props.link}
          rel="noreferrer"
        >
          {/* <LinkIcon></LinkIcon> */}
          <Image
            height={25}
            width={25}
            className={style.image}
            src={LinkIcon}
          />
        </a>
        <a
          target="_blank"
          className={style.NeonBtn}
          href={props.code}
          rel="noreferrer"
        >
          {/* <CodeIcon></CodeIcon> */}
          <Image
            height={25}
            width={25}
            className={style.image}
            src={CodeIcon}
          />
        </a>
      </div>
    </div>
  );
};
const ProjectCard = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const [hovered, setHovered] = useState(false);
  const mouseEnter = () => {
    setHovered(true);
  };
  const mouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={style.card}
      style={{
        height: isMobile ? "400px" : "100%",
      }}
    >
      {!isMobile ||
        (!props.hasMobileImg && (
          <LaptopMockup hover={hovered} src={props.img}>
            {/* <Front img={props.img} name={props.name} show={!hovered}></Front> */}
            <Back
              show={hovered}
              hosted={props.hosted}
              link={props.link}
              code={props.code}
              details={props.details}
              name={props.name}
            ></Back>
          </LaptopMockup>
        ))}
      {isMobile && props.hasMobileImg && (
        <MobileMockup hover={hovered} src={props.img}>
          <Back
            show={hovered}
            hosted={props.hosted}
            link={props.link}
            code={props.code}
            details={props.details}
            name={props.name}
          ></Back>
        </MobileMockup>
      )}
    </div>
  );
};

export default ProjectCard;
