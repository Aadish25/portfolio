import { useDispatch } from "react-redux";
import { handleNav } from "../../reducers/navbar/navbar";
import NavBar from "../Navbar/NavBar";
import "../Skills/skills.css";

export default function Skills() {
  const lists = [
    {
      img: "../src/assets/react.png",
      name: "ReactJS",
    },
    {
      img: "../src/assets/express.png",
      name: "ExpressJS",
    },
    {
      img: "../src/assets/node.png",
      name: "NodeJS",
    },
    {
      img: "../src/assets/mongo.png",
      name: "MongoDB",
    },
    {
      img: "../src/assets/javascript.png",
      name: "JavaScript",
    },
    {
      img: "../src/assets/html.png",
      name: "HTML",
    },
    {
      img: "../src/assets/css.png",
      name: "CSS",
    },
    {
      img: "../src/assets/c++.png",
      name: "C++",
    },
    {
      img: "../src/assets/redux.png",
      name: "Redux",
    },
    {
      img: "../src/assets/postgre.png",
      name: "Postgresql",
    },
    {
      img: "../src/assets/mui.jpeg",
      name: "MaterialUI",
    },
    {
      img: "../src/assets/bootstrap.png",
      name: "Bootstrap",
    },
    {
      img: "../src/assets/git.png",
      name: "GitHub",
    },
  ];
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <div
        className="container-skills"
        onClick={() => dispatch(handleNav(false))}
      >
        <div className="skills-header">
          <i id="comp" className="fa-solid fa-laptop-code"></i>
          <h1 style={{ color: "white" ,fontSize:"1.5rem" }}>
            Skills & <span style={{ color: "yellow" }}>Abilities</span>
          </h1>
        </div>
        <div className="skills">
          {lists.map((item, index) => {
            return (
              <div className="set" key={index}>
                <div className="img-map">
                  <img id="skill-img" src={item.img} alt="" />
                </div>
                <p key={index}>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
