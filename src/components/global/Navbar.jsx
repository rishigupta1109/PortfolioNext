import Image from "next/image";
import style from "../../CSS/Navbar.module.css";
import Logo from "../../resources/R logo.gif";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
const Navbar = (props) => {
  let [mobileview, setmobileview] = useState(false);
  let { mobilemenu, setmobilemenu } = props;
  const router = useRouter();
  const resize = () => {
    if (window.innerWidth > 500) {
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
    { heading: "About", link: "/" },
    { heading: "Skills", link: "skills" },
    { heading: "Projects", link: "projects" },
    { heading: "Contact Me", link: "contact" },
  ];
  console.log(router.pathname.slice(1));
  const path =
    router.pathname.slice(1).length === 0 ? "about" : router.pathname.slice(1);
  let headingToIdx = {
    about: 0,
    skills: 1,
    projects: 2,
    contact: 3,
  };
  if (!headingToIdx[path]) {
    return <div></div>;
  }
  let classes = ["", "", "", ""];
  classes[headingToIdx[path]] = "active";
  headings[headingToIdx[path]].heading =
    "<" + headings[headingToIdx[path]].heading + "/>";
  const clickHandler = (e) => {
    if (mobileview) {
      menuHandler();
    }
    if (Number(e.target.id) !== Number(props.page)) {
      router.push(`/${headings[Number(e.target.id)].link}`);
    }
  };
  return (
    <div className={style.nav}>
      <div className={style.navbar}>
        <Image
          className={style.logo}
          onClick={clickHandler}
          id="0"
          alt="Logo"
          src={Logo}
        ></Image>
        {!mobileview &&
          headings.map((element, index) => {
            if (index === 5 || index === 4) {
              return;
            }
            return (
              <h2
                key={index}
                onClick={clickHandler}
                id={index}
                className={style[`${classes[index]}`]}
              >
                {headings[index].heading}
              </h2>
            );
          })}
        {mobileview && (
          <div onClick={menuHandler} className={style.menubtnbox}>
            <div className={style.line1} ref={Line1}></div>
            <div className={style.line2} ref={Line2}></div>
            <div className={style.line3} ref={Line3}></div>
          </div>
        )}
      </div>
      {mobilemenu && mobileview && (
        <div data-aos="fade-left" className={style.mobilemenu}>
          {headings.map((element, index) => {
            if (index === 5 || index === 4) {
              return;
            }
            return (
              <>
                <h2
                  key={index}
                  onClick={clickHandler}
                  id={index}
                  className={style[`${classes[index]}`]}
                >
                  {headings[index].heading}
                </h2>
                <hr />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
