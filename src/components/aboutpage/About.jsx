import style from "../../CSS/About.module.css";
import Heading from "../global/Heading";
import { GlitchText } from "./GlitchText";
const About = () => {
  return (
    <div data-aos="fade-up" className={style.about}>
      <Heading>const about;</Heading>
      <div className={style.row}>
        <div data-aos="zoom-in" className={style.photobox}>
          <div className={style.profContainer}>
            <div className={style.pic} />
          </div>
          {/* <ContactDetails /> */}
        </div>
        <div className={style.infobox}>
          <GlitchText text={"Rishi Gupta"} />
          <div className={style.subheading}>
            <div className={style.statictxt}>I`m a</div>
            <ul className={style.dyanamictxts}>
              <li className={style.li}>
                <span>Web developer</span>
              </li>
              <li className={style.li}>
                <span>competitive programmer</span>
              </li>
            </ul>
          </div>

          <div className={style.detail}>
            I am a third year student persuing bachelor of engineering in
            electronics and telecommunication{" "}
            <a href="http://ietdavv.edu.in">@IETDAVV</a> . I am a coding
            enthusiast who likes to learn and apply things in real world.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
