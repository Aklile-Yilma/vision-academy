import BgImg from "../../assets/building-1.jpeg";

const AboutSection = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col ">
      <div
        className="w-full md:w-3/4 lg:w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur bg-primary/80">
          <h1 className="mt-5 text-center text-base md:text-2xl text-white font-semibold">
            About us
          </h1>
          <span className="text-white px-4 text-start">
            Established in August 1998, Vision Academy is a renowned educational
            institution located in Hosanna town, Ethiopia. With a legacy of more
            than two decades, we have been committed to providing quality
            education and shaping the future leaders of our nation. At Vision
            Academy, we believe in nurturing the potential of each student,
            empowering them to achieve academic excellence and personal growth.
            With a vibrant and inclusive learning environment, we inspire our
            students to think critically, embrace creativity, and develop a
            lifelong love for learning.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
