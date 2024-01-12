import { useDispatch } from "react-redux";
import { handleNav } from "../../reducers/navbar/navbar";
import NavBar from "../Navbar/NavBar";
import "../Skills/skills.css";

export default function Skills() {
  const lists = [
    {
      img: "/react.png",
      name: "ReactJS",
    },
    {
      img: "/express.png",
      name: "ExpressJS",
    },
    {
      img: "/node.png",
      name: "NodeJS",
    },
    {
      img: "/mongo.png",
      name: "MongoDB",
    },
    {
      img: "/javascript.png",
      name: "JavaScript",
    },
    {
      img: "/html.png",
      name: "HTML",
    },
    {
      img: "/css.png",
      name: "CSS",
    },
    {
      img: "/dsa.png",
      name: "DSA",
    },
    {
      img: "/c++.png",
      name: "C++",
    },
    {
      img: "/redux.png",
      name: "Redux",
    },
    {
      img: "/postgre.png",
      name: "Postgresql",
    },
    {
      img: "/mui.jpeg",
      name: "MaterialUI",
    },
    {
      img: "/bootstrap.png",
      name: "Bootstrap",
    },
    {
      img: "/git.png",
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
