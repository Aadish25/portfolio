import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Contact/Contact.css";
import NavBar from "../Navbar/NavBar";
export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_6mw455u";
    const templateId = "template_xnox9sj";
    const publicKey = "9nfcuOvtyu_GOWzc3";
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: "Aadish Jain",
      message: data.message,
      from_mobile: data.mobile,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log(response);
        setData({ name: "", email: "", mobile: "", message: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <NavBar/>
    <div className="contact-container">
      <div className="contact-header">
        <i id="contact-icon" className="fa-solid fa-headset"></i>
        <h1 id="text">
          Get In <span style={{ color: "#7303a7" }}>Touch</span>
        </h1>
      </div>
      <div className="contact-main">
        <img id="contact-img" src="/contact.jpg" alt="" />
        <div className="forms">
          <form className="form">
            <input
              className="input-tags"
              placeholder="Name"
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              className="input-tags"
              placeholder="E-mail"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              className="input-tags"
              placeholder="Mobile Number"
              type="text"
              value={data.mobile}
              name="mobile"
              onChange={handleChange}
            />
            <input
              className="input-tags"
              name="message"
              placeholder="Message"
              value={data.message}
              type="text"
              onChange={handleChange}
            />
          </form>
          <button onClick={handleSubmit} className="sub-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
