import Image from "next/image";
import style from "../../CSS/ProjectCard.module.css";
import { useRef } from "react";
import LinkIcon from "../../resources/linksvg.svg";
import CodeIcon from "../../resources/code.svg";

const ProjectCard = (props) => {
  const cardRef = useRef(null);
  const mouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={cardRef} onMouseMove={mouseMove} className={style.card}>
      <Image src={props.img} alt={props.name} className={style.img} />
      <div className={style.scrim} />
      <div className={style.info}>
        <h3 className={style.title}>{props.name}</h3>
        <p className={style.details}>{props.details}</p>
        <div className={style.actions}>
          <a
            target="_blank"
            rel="noreferrer"
            href={props.link}
            className={style.iconBtn}
            aria-label={props.hosted ? "Visit live site" : "View overview"}
          >
            <Image height={17} width={17} src={LinkIcon} alt="" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={props.code}
            className={style.iconBtn}
            aria-label="View source code"
          >
            <Image height={17} width={17} src={CodeIcon} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
