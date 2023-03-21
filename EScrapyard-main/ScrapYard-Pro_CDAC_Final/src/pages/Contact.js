
import React, { useState } from "react";
import PizzaLeft from "../assets/contactus.jpg";
import "../styles/Contact.css";
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

function Contact() {
  const history = useHistory();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Thank you for contacting us!");
    setFormSubmitted(true);
    setTimeout(() => {
      history.push("/");
    }, 3000);
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      {formSubmitted && (
        <div className="toast">
          <p>Thank you for contacting us!</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

