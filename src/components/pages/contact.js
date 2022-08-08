import React from "react";
import { useState } from "react";
import "../../assets/css/Contact.css";

function Contact() {
  const submitHandler = (event) => {
    event.preventDefault();
    setMessage(
      `Thank you, ${inputs.name}. A member of our team will be in touch with you shortly!`
    );
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInputs((state) => ({ ...state, [name]: value }));
  };

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [message, setMessage] = useState(null);
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact us</h1>
      </div>
      <br></br>
      <br></br>
      <form action="" onSubmit={submitHandler}>
        <div className="form-row">
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={inputs.name}
            onChange={changeHandler}
          />
        </div>
        <br></br>
        <div className="form-row">
          <label htmlFor="email">Your email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={inputs.email}
            onChange={changeHandler}
          />
        </div>
        <br></br>
        <div className="form-row">
          <textarea
            name="message"
            rows="10"
            cols="30"
            placeholder="Your Message"
          ></textarea>
        </div>
        <br></br>
        <button type="submit" id="submit-btn">
          Submit
        </button>
      </form>

      {message ? <p>{message}</p> : ""}
    </div>
  );
}
export default Contact;
