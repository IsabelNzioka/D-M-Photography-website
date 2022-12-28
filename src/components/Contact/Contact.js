import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { useForm } from "react-hook-form";

import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_np2ws7t",
        "template_b7a6n3x",
        form.current,
        "mV2o8vaVbtpd3re6T"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="ContactPage">
      <div className="ContactPicture">
        <div className="grid">
          {/* <p>1</p> */}
          <img src="Images/woman1.jpg" alt="Portraits" />
        </div>
      </div>
      <div className="ContactForm">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Name" />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email" />
          <label>Mobile</label>
          <input type="tel" name="user_mobile" placeholder="Mobile" />
          <label>Message</label>
          <textarea name="message" placeholder="message" />

          <button type="submit" className="ButtonSubmit">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
