import { useDispatch } from "react-redux";
import "../Experience/experience.css";
import NavBar from "../Navbar/NavBar";
import { handleNav } from "../../reducers/navbar/navbar";

export default function Experience() {
    const dispatch = useDispatch();
  const expList = [
    {
      companyName: "FiftyFive Technologies",
      title: "Software Engineer Intern",
      duration: "June 2023-August 2023",
      location: "Jaipur",
      details:
        "During my 60-day software engineer internship, I learned web     development skills. I covered HTML, CSS, JavaScript, front-end frameworks (such as React.js), back-end development using Node.js and Express.js, database integration, version control with Git, and worked on real-world projects. I also engaged in a learning culture, received feedback, and developed a strong foundation in web development.",
      img: "/55.jpeg",
    },
  ];
  return (
    <>
    <NavBar/>
    <div className="container-exp" onClick={() => dispatch(handleNav(false))}>
      <div className="exp-header">
        <i id="exp-icon" className="fa-solid fa-briefcase"></i>
        <h1 id="exp-head">Experience</h1>
      </div>
      <div className="exp-main">
        {expList.map((item, index) => {
          return (
            <div key={index} className="exp-body">
              <img id="exp-img" src={item.img} alt="company image" />
              <div className="exp-info">
                <h1 style={{ color: "blue" }}>{item.companyName}</h1>
                <p style={{ color: "purple" }}>{item.title}</p>
                <p style={{ color: "green" }}>
                  {item.duration} |{" "}
                  <span style={{ color: "red" }}>
                    <i className="fa-solid fa-location-dot"></i> {item.location}
                  </span>{" "}
                </p>
                <br />
                <p>{item.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
