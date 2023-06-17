import { useState } from "react";
import socialMedia from "../../data/socials.json";
import logo from "../../assets/logo_cropped.png";
import notify from "../../utils/successNotification";
import { ToastContainer } from "react-toastify";
import CustomButton from "../common/CustomButton";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    // Handle form submission here, e.g. send email to server or show success message
    notify("Subscribed!");
    setEmail(""); // Clear the email input
    setEmailError(""); // Clear the email error message
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear the email error message when user types in the input
  };
  const iconsData = [
    {
      icon: AiOutlineTwitter,
      to: "",
    },
    {
      icon: MdOutlineFacebook,
      to: "https://www.facebook.com/Visionacademyethiopia",
    },
    {
      icon: AiFillYoutube,
      to: "",
    },
  ];
  return (
    <footer className="border-t mt-auto bg-slate-100">
      <div className="w-full px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img className="w-32" src={logo} alt="Vision Logo" />
            </a>
            <h1 className="text-base lg:text-lg">
              Subscribe to our NewsLetter
            </h1>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col mt-6 space-y-3 gap-4 md:space-y-0 md:flex-row">
                  <input
                    id="email"
                    type="email"
                    className={`px-4 py-2 text-gray-700  bg-white border border-primary rounded-md focus:outline-none ${
                      emailError ? "border-red-500" : ""
                    }`}
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  {emailError && (
                    <span className="text-red-500 text-sm">{emailError}</span>
                  )}
                  <CustomButton text="Subscribe" callback={() => {}} />
                </div>
              </form>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:+251465550014"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-primary hover:text-green-600"
              >
                +251465550014
              </a>
              <span>/</span>
              <a
                href="tel:+251465553217"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-primary hover:text-green-600"
              >
                +251465553217
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@visionacdemy.edu.et"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-primary hover:text-green-600"
              >
                info@visionacdemy.edu.et
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-primary hover:text-green-600"
              >
                SNNP Region, Hosanna, Ethiopia. Next To AG Hotel
              </a>
            </div>
          </div>

          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>

            {/* ::Socials */}
            <div className="flex items-center gap-4 mt-4 text-2xl md:text-3xl ">
              {iconsData.map(({ icon: Icon, to }, index) => (
                <NavLink
                  key={index}
                  href={to}
                  target="_blank"
                  className="hover:text-gray-400"
                >
                  <Icon />
                </NavLink>
              ))}
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Follow us on social media.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2023 Vision Academy. All rights reserved.
          </p>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;
