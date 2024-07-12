import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../contact/index.css";

function Contact() {
  const [contactValue, setContactValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  function handleChangeName(event) {
    event.preventDefault();
    setName(event.target.value);
  }
  function handleChangeEmail(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }
  function handleChangeSubject(event) {
    event.preventDefault();
    setSubject(event.target.value);
  }
  function handleChangeMessage(event) {
    event.preventDefault();
    setMessage(event.target.value);
  }
  function handleSubmitForm(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_slx3nvi",
        "template_ryy8wqk",
        event.target,
        "X40iR-BWrNLaMeJgL"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    setContactValue({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  // console.log("contactValue", contactValue);
  return (
    <>
      <div className="contact-parent">
        <form ref={form} onSubmit={handleSubmitForm}>
          <div>
            <input
              required
              type="text"
              placeholder="Enter your name"
              id="name"
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="Enter your email"
              id="email"
              name="email"
              autoComplete="on"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div>
            <input
              type="text"
              required
              placeholder="Subject"
              id="subject"
              name="subject"
              autoComplete="on"
              value={subject}
              onChange={handleChangeSubject}
            />
          </div>
          <div>
            <textarea
              type="text"
              required
              placeholder="message"
              id="message"
              name="message"
              autoComplete="off"
              value={message}
              onChange={handleChangeMessage}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
