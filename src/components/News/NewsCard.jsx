import PropTypes from "prop-types";
import formatDate from "../../utils/dateConvertor";
import logo from "../../assets/slides/building-1.jpeg";
import { useNavigate } from "react-router-dom";

function NewsCard({ datePosted, description }) {
  const formattedDate = formatDate(datePosted);
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate("/contact-us");
  };

  return (
    <>
      {/* Container */}

      <div className="container mx-auto p-4 md:p-0">
        <div className="md:ml-32">
          <p className="text-sm md:text-base">News, News Letters</p>

          <h1 className="text-xl md:text-2xl">
            Parent NewsLetter - {datePosted}
          </h1>
          <hr className="h-px w-4 my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <p>Posted on {formattedDate}</p>
        </div>

        {/* Card wrapper */}
        <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
          {/* Card image */}
          <div
            className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
            style={{
              backgroundImage: `url(${logo})`,
            }}
          ></div>
          {/* ./Card image */}
          {/* Card body */}
          <div className="bg-white w-full md:w-2/3">
            {/* Card body - outer wrapper */}
            <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
              {/* Card body - inner wrapper */}
              <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                {/* Card title and subtitle */}
                <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                  <h3>Vision Academy</h3>
                  <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                    Hosanna - Ethiopia
                  </p>
                  <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                </div>
                {/* ./Card title and subtitle */}
                {/* Card description */}
                <div className="w-full lg:w-3/5 lg:px-3">
                  <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                    {/* Card description text */}
                    {description}
                  </p>
                  {/* ./Card description text */}
                </div>
                {/* ./Card description */}
                {/* Call to action button */}
                <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                  <button
                    onClick={handleMoreInfo}
                    className="bg-primary text-white hover:bg-white hover:text-primary border border-solid border-grey w-2/3 lg:w-full py-2 transition duration-300 ease-in-out"
                  >
                    More Info
                  </button>
                </div>
                {/* ./Call to action button */}
              </div>
              {/* ./Card body - inner wrapper */}
            </div>
            {/* ./Card body - outer wrapper */}
          </div>
          {/* ./Card body */}
        </div>
        {/* ./Card wrapper */}
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      </div>
      {/* ./Container */}
    </>
  );
}

NewsCard.propTypes = {
  datePosted: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NewsCard;
