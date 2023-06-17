import AboutSection from "../components/Home/AboutSection";
import Banner from "../components/Home/Banner";
import ImportantSection from "../components/Home/ImportantSection";
import Heading from "../components/common/Heading";

const Home = () => {
  return (
    <div className="font-merriweather">
      <Heading text="Welcome To Vision Academy" />
      <Banner />
      <AboutSection />
      <ImportantSection />
    </div>
  );
};

export default Home;
