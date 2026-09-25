import Image from "next/image";
import Link from "next/link";
import style from "../../CSS/Navbar.module.css";
import Logo from "../../resources/logo-transparent.png";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import ThemeToggle from "./ThemeToggle";

const Navbar = (props) => {
  let [mobileview, setmobileview] = useState(false);
  let { mobilemenu, setmobilemenu } = props;
  const router = useRouter();
  const resize = () => {
    if (window.innerWidth > 700) {
      if (mobileview) {
        setmobileview(false);
      }
    } else {
      if (!mobileview) {
        setmobileview(true);
      }
    }
  };
  let Line1 = useRef();
  let Line2 = useRef();
  let Line3 = useRef();
  const menuHandler = () => {
    if (!mobilemenu) {
      setmobilemenu(true);
      Line3.current.style.transform = ` rotate(
            45deg) translate(-12px, -11px)`;
      Line1.current.style.transform = ` rotate( 
            135deg) translate(14px, -11px)`;
      Line2.current.style.transform = ` translate(-55px, 0px)`;
    } else {
      setmobilemenu(false);
      Line3.current.style.transform = ` rotate(
                0deg) translate(0px, 0px)`;
      Line1.current.style.transform = ` rotate( 
                0deg) translate(0px, 0px)`;
      Line2.current.style.transform = ` translate(0px, 0px)`;
    }
  };
  useEffect(() => {
    window.onresize = resize;
    resize();
  }, []);
  let headings = [
    { heading: "About", link: "" },
    { heading: "Skills", link: "skills" },
    { heading: "Projects", link: "projects" },
    { heading: "Contact Me", link: "contact" },
  ];
  const path =
    router.pathname.slice(1).length === 0 ? "about" : router.pathname.slice(1);
  let headingToIdx = {
    about: 0,
    skills: 1,
    projects: 2,
    contact: 3,
  };
  if (headingToIdx[path] === undefined) {
    return <div></div>;
  }
  let classes = ["", "", "", ""];
  classes[headingToIdx[path]] = "active";
  headings[headingToIdx[path]].heading =
    "<" + headings[headingToIdx[path]].heading + "/>";
  const navClickHandler = () => {
    if (mobileview) {
      menuHandler();
    }
  };
  return (
    <div className={style.nav}>
      <div className={style.navbar}>
        <Link
          href="/"
          onClick={navClickHandler}
          aria-label="Home"
          className={style.logoLink}
        >
          <Image className={style.logo} alt="Logo" src={Logo}></Image>
        </Link>
        {!mobileview && (
          <div className={style.navLinks}>
            {headings.map((element, index) => {
              if (index === 5 || index === 4) {
                return;
              }
              return (
                <Link
                  key={index}
                  href={`/${headings[index].link}`}
                  onClick={navClickHandler}
                  className={style[`${classes[index]}`]}
                >
                  {headings[index].heading}
                </Link>
              );
            })}
          </div>
        )}
        <div className={style.navActions}>
          <ThemeToggle />
          {mobileview && (
            <button
              type="button"
              onClick={menuHandler}
              aria-label={mobilemenu ? "Close menu" : "Open menu"}
              aria-expanded={mobilemenu}
              className={style.menubtnbox}
            >
              <div className={style.line1} ref={Line1}></div>
              <div className={style.line2} ref={Line2}></div>
              <div className={style.line3} ref={Line3}></div>
            </button>
          )}
        </div>
      </div>
      <div
        className={style.mobilemenu}
        style={{
          position: "absolute",
          opacity: mobilemenu && mobileview ? "100%" : "0%",
          left: mobilemenu && mobileview ? "0px" : "-100vw",
        }}
      >
        {headings.map((element, index) => {
          if (index === 5 || index === 4) {
            return;
          }
          return (
            <Link
              key={index}
              href={`/${headings[index].link}`}
              onClick={navClickHandler}
              className={style[`${classes[index]}`]}
            >
              {headings[index].heading}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
