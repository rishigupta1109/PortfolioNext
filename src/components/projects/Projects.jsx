import style from "../../CSS/Projects.module.css";
import ProjectCard from "./ProjectCard";
import ttt from "../../resources/ttt.png";
import tbb from "../../resources/tbb.png";
import dnb from "../../resources/dnb.png";
import ct from "../../resources/ct.png";
import fs from "../../resources/fbz.png";
import cb from "../../resources/cb.png";
import av from "../../resources/Av.png";
import rps from "../../resources/rpps.png";
import bb from "../../resources/bb.png";
import ss from "../../resources/sudokuSolver.jpg";
import mh from "../../resources/Meethub.png";
import sc from "../../resources/sheetcode.png";
import Heading from "../global/Heading";

const Projects = () => {
  let projectsList = [
    {
      name: "SheetCode",
      img: sc,
      details:
        "SheetCode is your ultimate platform for SDE (Software Development Engineer) enthusiasts. Discover a comprehensive collection of coding sheets, track your programming progress, and stay connected with friends.",
      link: "https://sheetcode.vercel.app/",
      code: "https://github.com/rishigupta1109/DSASheets",
      hosted: true,
    },
    {
      name: "Blogger`s Block",
      img: bb,
      details:
        "Blogger`s Block is a blogging platform where one can share his experience and knowledge in form of blogs.It is made using NextJs , NodeJs and MongoDB.",
      link: "https://www.bloggers-block.tech/",
      code: "https://github.com/rishigupta1109/BloggersBlock",
      hosted: true,
    },
    {
      name: "The Book Bajaar",
      img: tbb,
      details:
        "The book Bajaar acts as a mediator between the buyer and the seller of a book.It is made using ReactJs , NodeJs, ExpressJs and MongoDB.",
      link: "https://www.thebookbajaar.live/",
      code: "https://github.com/rishigupta1109/TheBookBajaar",
      hosted: true,
    },
    {
      name: "MeetHub",
      img: mh,
      details:
        "A Video calling web app where people can create and join meetings made using html, css, js and Nodejs.",
      link: "https://meethub.onrender.com/",
      code: "https://github.com/rishigupta1109/VideoCallingApp",
      hosted: true,
    },
    {
      name: "FoodBaZinga",
      img: fs,
      details:
        "This is Food ordering web app made using ReactJS,MongoDB and NodeJS",
      link: "https://www.linkedin.com/posts/rishi-gupta-027298204_webdevelopment-learning-reactjs-activity-6814595111528353792-OW1H",
      code: "https://github.com/rishigupta1109/FoodApp",
      hosted: false,
    },
    {
      name: "Corona Tracker",
      img: ct,
      details:
        "This is a web application which shows stats of corona.It is made using ReactJS,CSS and covidAPI",
      link: "https://rishigupta1109.github.io/CoronaTracker",
      code: "https://github.com/rishigupta1109/CoronaTracker",
      hosted: true,
    },
    {
      name: "Algorithm Visualiser",
      img: av,
      details: "This is a algorithm visualiser made using HTML,CSS and JS",
      link: "https://rishigupta1109.github.io/algorithm_visualiser/",
      code: "https://github.com/rishigupta1109/algorithm_visualiser",
      hosted: true,
    },
    {
      name: "Sudoku Solver and Visualiser",
      img: ss,
      details:
        "This is a sudoku solver and  visualiser made using ReactJS,CSS and JS",
      link: "https://sudoku-solver-rose.vercel.app/",
      code: "https://github.com/rishigupta1109/sudokuSolver",
      hosted: true,
    },
    {
      name: "Contest Buddy",
      img: cb,
      details:
        "This is a Chrome extension ehich shows stats of user on codeforces made using HTML,CSS,codeforcesAPI and JS",
      link: "https://www.linkedin.com/posts/rishi-gupta-027298204_connections-chromeextension-competitiveprogramming-activity-6852170088955674624-XKie",
      code: "https://github.com/rishigupta1109/contestBuddy",
      hosted: false,
    },
    {
      name: "Rock Paper Scissors",
      img: rps,
      details:
        "This is a online multiplayer game made using html ,css, js,nodejs and socket.io",
      link: "https://rock-paper-scissor-gilt.vercel.app/",
      code: "https://github.com/rishigupta1109/RockPaperScissor",
      hosted: true,
    },
    {
      name: "Tic Tac Toe",
      img: ttt,
      details: "This is a game made using HTML,CSS and JS",
      link: "https://rishigupta1109.github.io/tictaktoe",
      code: "https://github.com/rishigupta1109/tictaktoe",
      hosted: true,
    },
    {
      name: "Dots and Boxes",
      img: dnb,
      details: "This is a game made using HTML,CSS and JS",
      link: "https://rishigupta1109.github.io/Dots-Boxes",
      code: "https://github.com/rishigupta1109/Dots-Boxes",
      hosted: true,
    },
  ];
  return (
    <div data-aos="fade-up" className={style.projectssection}>
      <Heading>let projects;</Heading>
      <div className={style.container}>
        {projectsList.map((object) => {
          return (
            <ProjectCard
              hosted={object.hosted}
              key={object.name}
              img={object.img}
              name={object.name}
              details={object.details}
              link={object.link}
              code={object.code}
            ></ProjectCard>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
