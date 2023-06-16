import { useState } from "react";
import socialMedia from "../../data/socials.json";
import logo from "../../assets/logo_cropped.jpeg";
import notify from "../../utils/successNotification";
import { ToastContainer } from "react-toastify";
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
  return (
    <footer className="border-t">
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
                  <button
                    type="submit"
                    className="py-2 px-6 rounded bg-white border border-primary text-base text-primary font-semibold uppercase hover:bg-primary hover:text-white transition duration-300 ease-in-out"
                  >
                    Subscribe
                  </button>
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
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                850-123-5021
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@lorem.mail
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
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                312 Lovely Street, NY
              </a>
            </div>
          </div>

          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>

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
