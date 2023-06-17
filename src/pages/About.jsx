import React from "react";
import about from "../data/about.json";
import AboutTile from "../components/About/AboutTile";
import CustomButton from "../components/common/CustomButton";
import { useNavigate } from "react-router-dom";
import Heading from "..//components/common/Heading";
function AboutUs() {
  const navigate = useNavigate();
  const handleContactUs = () => {
    navigate("/contact-us");
  };
  return (
    <main className="mx-auto max-w-full m-auto">
      <Heading text="KNOW MORE ABOUT US" />

      {about.map((item, index) => (
        <AboutTile
          key={index}
          text={item.text}
          img={item.url}
          heading={item.heading}
          reverse={index % 2 != 0}
        />
      ))}
      <div className="flex flex-wrap mb-0 py-8">
        <div className="w-full lg:w-3/5 px-4 mx-auto text-center space-y-6">
          <h2 className="fw-bold">STILL HAVE QUESTIONS ?</h2>
          <p>
            If there is anything unclear and confusing &nbsp;and also if you
            need more details on the service we offer contact us.
          </p>
          <CustomButton text="contact us" callback={handleContactUs} />
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
