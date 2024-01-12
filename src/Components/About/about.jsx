import { Link } from "react-router-dom";
import "../About/about.css";
import NavBar from "../Navbar/NavBar";
import { useDispatch } from "react-redux";
import { handleNav } from "../../reducers/navbar/navbar";

export default function About() {
  const dispatch = useDispatch();
  return (
    <>
    <NavBar/>
    <div className="container-about" onClick={() => dispatch(handleNav(false))}>
      <div className="about-me">
        <i id="user" className="fa-solid fa-user"></i>
        <h1 style={{fontSize:"1.5rem"}}>
          About <span style={{ color: "purple" }}>Me</span>
        </h1>
      </div>

      <div className="box-about">
        <img id="about-pic" src="public\about-pic.jpg" alt="" />
        <div className="details">
          <h1>I&apos;m Aadish</h1>
          <p style={{ fontWeight: 700 }}>Full Stack Developer</p>
          <br />
          <p>
            I am a proactive full-stack developer with a strong grasp of data
            structures and algorithms. I am highly motivated to continuously
            learn and adopt new technologies to enhance my skills and stay at
            the forefront of the ever-evolving tech landscape.
          </p>
          <br />
          <p style={{ color: "blue" }}>
            Email:{" "}
            <span style={{ color: "black" }}>jainaadish2503@gmail.com</span>
          </p>
          <br />
          <p style={{ color: "blue" }}>
            Place: <span style={{ color: "black" }}>Kota,India -324005</span>
          </p>
         <Link  target="_blank" to={"https://drive.google.com/file/d/1O-Zxqzyd6KZnr7GnbpG6-qERASBVoueE/view?usp=sharing"}><button className="resume-btn">Resume <span>&gt;</span></button></Link>
        </div>
      </div>
    </div>
    </>
  );
}
