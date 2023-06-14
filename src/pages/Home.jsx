import AboutSection from "../components/Home/AboutSection";
import Banner from "../components/Home/Banner";
import ImportantSection from "../components/Home/ImportantSection";

const Home = () => {
  return (
    <div className="font-loto">
      <h1 className="text-lg md:text-2xl text-accent text-center">
        Welcome To Vision Academy
      </h1>
      <Banner />
      <AboutSection />
      <ImportantSection />
    </div>
  );
};

export default Home;
