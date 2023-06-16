import { useState, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import socialMedia from "../data/socials.json";
import notify from "../utils/successNotification";
// import dotenv from "dotenv";

// dotenv.config();

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const form = useRef();

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Please enter your name";
    }
    if (!email.trim()) {
      errors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!message.trim()) {
      errors.message = "Please enter your message";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      /* 
      send email
      */
      // process.env.REACT_APP_SERVICE_ID,
      //   process.env.REACT_APP_TEMPLATE_ID,
      //   form.current,
      //   process.env.REACT_APP_PUBLIC_KEY;
      emailjs
        .sendForm(
          // "service_75cuz96",
          // "template_azivjxg",
          // form.current,
          // "i1lHEV215jlZuDWTI"
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      // clear message
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      // show notification
      notify("Email sent!");
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-7xl bg-white text-gray-700">
      <div className="grid grid-cols-2">
        {/* :MAP CONTAINER */}
        <div className="order-1 col-span-full">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=vision%20acadamy%20hossana%20ethiopia%20+(My%20BuVsiness%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="map"
            width="100%"
            height="300px"
            className=""
            loading="lazy"
          />
        </div>

        {/* :CONTACT FORM CONTAINER */}
        <div className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-10 px-6">
          <form
            ref={form}
            action=""
            className="mx-auto max-w-xl space-y-4"
            onSubmit={handleSubmit}
          >
            {/* ::Name Input */}
            <div>
              {/* :::label */}
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              {/* :::input */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`form-input p-2 w-full block shadow-sm rounded border border-gray-300 bg-gray-100 text-base placeholder-gray-300 focus:border-primary focus:ring-1 focus:ring-primary ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            {/* ::Email Input */}
            <div>
              {/* :::label */}
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              {/* :::input */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`form-input p-2 w-full block shadow-sm rounded border border-gray-300 bg-gray-100 text-base placeholder-gray-300 focus:border-primary focus:ring-1 focus:ring-primary ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            {/* ::Message Input */}
            <div className="col-span-full">
              {/* :::label */}
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              {/* :::input */}
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="4"
                placeholder="How can we help?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`form-textarea p-2 resize-none w-full shadow-sm rounded border border-gray-300 bg-gray-100 placeholder-gray-300 focus:border-primary focus:ring-primary ${
                  errors.message ? "border-red-500" : ""
                }`}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
            </div>
            {/* ::Submit Button */}
            <div>
              <button
                type="submit"
                className="py-2 px-6 rounded bg-white border border-primary text-base text-primary font-semibold uppercase hover:bg-primary hover:text-white transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* :CONTACT INFOS CONTAINER */}
        <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
          <div className="mx-auto max-w-xl flex flex-col space-y-5">
            {/* ::Title Contact Us */}
            <h2 className="text-4xl font-oswald uppercase">Contact us</h2>
            {/* ::Text */}
            <p className="text-sm text-gray-500">
              We welcome your questions and feedback! Please use the information
              below to get in touch with us. We&#39;re always happy to hear from
              our students and their parents and will do our best to respond to
              your inquiry as soon as possible.
            </p>
            {/* ::Email contact */}
            <a
              href="#mail"
              className="inline-flex items-center text-sm text-blue-400 font-semibold hover:text-blue-500"
            >
              <AiOutlineMail className="mr-2 w-5 text-gray-400" />
              info@visionacdemy.edu.et
            </a>
            {/* ::Address */}
            <p className="text-sm text-gray-500 leading-6">
              Next To AG Hotel
              <br /> SNNP Region, Hosanna, <br />
              Ethiopia.
            </p>
            {/* ::Socials */}
            <div className="flex items-center">
              {socialMedia.map(({ to, styleClass, bgColor, svg }, index) => (
                <a
                  key={index}
                  href={to}
                  className={styleClass}
                  style={{ backgroundColor: { bgColor } }}
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d={svg.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
