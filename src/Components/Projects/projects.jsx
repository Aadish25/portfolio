import { useDispatch } from "react-redux";
import NavBar from "../Navbar/NavBar";
import "../Projects/projects.css";
import Project from "./project";
import { handleNav } from "../../reducers/navbar/navbar";

export default function Projects() {
  const dispatch = useDispatch();
  const projectsLists = [
    {
      img: "/furninow.png",
      name: "FurniNow MERN",
      details:
        "It is a furniture e-commerce web application uses React.Js for the front-end to create an interactive user interface. On the back-end, it employs Express.Js and Node.Js for server-side operations, while MongoDB handles data storage. This combination of technologies enables you to build a dynamic, responsive, and scalable platform for selling furniture online.",
      link: "https://github.com/Aadish25/FurniNow",
    },
    {
      img: "/react.png",
      name: "React Projects",
      details:
        "A Dashboard Which Is Collection Of Projects Built On The React Library.",
      link: "https://github.com/Aadish25?tab=repositories",
    },
    {
      img: "/fb.png",
      name: "Facebook Profile Frontend",
      details:
        "A Frontend page of Profile section of Facebook made with HTML and CSS.",
      link: "https://github.com/Aadish25?tab=repositories",
    },
    {
      img: "/unacedemy.png",
      name: "Unacademy Frontend",
      details:
        "A Frontend page of Login page of Unacademy made with HTML and CSS.",
      link: "https://github.com/Aadish25?tab=repositories",
    },
    {
      img: "/pulmones.png",
      name: "Pulmones",
      details:
        "It is a Team Project mainly Build in CSS, HTML and Java Script. Its Lungs Diagnosis Website which takes some symptoms as an input and according to that it shows the percentage of happening a lungs disease. From website you can also book an appointment of a doctor and it also include an emergency service",
      link: "https://aadish25.github.io/Pulmones/",
    },
  ];
  return (
    <>
      <NavBar />
      <div
        className="container-projects"
        onClick={() => dispatch(handleNav(false))}
      >
        <div className="project-header">
          <i
            id="comp"
            style={{ color: "white" }}
            className="fa-solid fa-laptop-code"
          ></i>
          <h1 id="name-head" style={{ color: "white" }}>
            Projects <span style={{ color: "yellow" }}>Made</span>
          </h1>
        </div>
        <div className="project-body">
          {projectsLists.map((item, index) => {
            return (
              <Project
                key={index}
                img={item.img}
                details={item.details}
                name={item.name}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
