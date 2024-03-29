import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { useForm } from "react-hook-form";

import Input from "./Input/Input";
import Success from "./Success/Success";

import { motion } from "framer-motion";

import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  Link,
  NavLink,
  Outlet,
  useLocation,
  matchRoutes,
  useRoutes,
} from "react-router-dom";

import "./Contact.css";

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { duration: 1 },
    // transition={ease: [0.17, 0.67, 0.83, 0.67] },
  },
};

const ContactInfo = () => {
  const form = useRef();

  const [contactForm, setContactForm] = useState({
    name: {
      elementType: "input",
      label: "Name:",
      elementConfig: {
        type: "text",
        placeholder: "Name",
        validname: "user_name",
      },
      value: "",
      validation: {
        required: true,
        minLength: 3,
        maxLength: 30,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      label: "Email:",
      elementConfig: {
        type: "email",

        placeholder: "Your E-mail",
        validname: "user_email,",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    mobile: {
      elementType: "input",
      label: "Phone Number:",
      elementConfig: {
        type: "tel",
        placeholder: "0700000000",
        validname: "user_mobile",
      },
      value: "",
      validation: {
        required: true,
        minLength: 10,
      },
      valid: false,
      touched: false,
    },
    deliveryMethod: {
      elementType: "select",
      label: "What type of sessions are you looking For?",
      elementConfig: {
        options: [
          { value: "wedding", displayValue: "Wedding" },
          { value: "portrait", displayValue: "Portrait" },
          { value: "engagement", displayValue: "Engagement" },
          { value: "couple", displayValue: "Couple Session" },
          { value: "maternity", displayValue: "Maternity" },
          { value: "newborn", displayValue: "Newborn Session" },
          { value: "graduation", displayValue: "Graduation Session" },
          { value: "special", displayValue: "Special Inquiry" },
        ],
        validname: "user_session",
      },
      value: "",
      validation: {},
      valid: true,
    },
    message: {
      elementType: "textarea",
      label: "Message:",
      elementConfig: {
        type: "text",
        placeholder: "Your Message",
        validname: "message",
      },
      value: "",
      validation: {
        required: true,
        minLength: 3,
      },
      valid: false,
      touched: false,
    },
  });

  let [formIsValid, setFormIsValid] = useState(false);

  const checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedContactForm = {
      ...contactForm,
    };
    const updatedFormElement = {
      //clone
      ...updatedContactForm[inputIdentifier], //name, email, message, mobile
    };
    updatedFormElement.value = event.target.value;

    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    // console.log(updatedFormElement);
    updatedContactForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedContactForm) {
      formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
    }

    // console.log(updatedFormElement);
    setContactForm(updatedContactForm);
    setFormIsValid(formIsValid);
  };

  //   checkValidity;

  const formElementArray = [];
  for (let key in contactForm) {
    formElementArray.push({
      id: key,
      config: contactForm[key],
    });
  }

  let navigate = useNavigate();
  const handleClick = (inputIdentifier) => {
    <Input
      key=""
      elementType=""
      elementConfig=""
      value=""
      invalid=""
      // shouldValidate={formElement.config.validation}
      touched={false}
      changed={false}
      named=""
    />;

    form.current?.reset();
    navigate("contact/success");
  };

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
          console.log(result);
          console.log("Message sent");
          form.current.reset();
          // e.target.reset();
          // for (let i = 0; i < 4; i++) {
          console.log(e.target);

          //   e.target[i].value = "";
          // }
          // formElementArray.map(
          //   (formElement) => {
          //     formElement.config.value = "";

          //     return console.log(formElement.config);
          //   }

          // );
          navigate("contact/success");
        },
        (error) => {
          console.log(error.text);
          console.log("Fill the text");
        }
      );

    //
  };

  return (
    <motion.div
      className="ContactForm"
      transition={{ staggerChildren: 0.4 }}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.form ref={form} onSubmit={sendEmail} variants={childVariants}>
        {formElementArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            label={formElement.config.label}
            invalid={!formElement.config.valid}
            // shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => inputChangedHandler(event, formElement.id)}
            named={formElement.config.elementConfig.validname}
          />
        ))}

        <button
          type="submit"
          className="ButtonSubmit"
          disabled={!formIsValid}
          // onClick={handleClick}
        >
          {" "}
          {formIsValid ? "Submit" : "All fields must be filled out"}
        </button>
        {/* <input type="submit" value="Send" /> */}
      </motion.form>
    </motion.div>
  );
};

export default ContactInfo;
