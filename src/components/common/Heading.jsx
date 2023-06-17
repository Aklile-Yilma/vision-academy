import PropTypes from "prop-types";

const Heading = ({ text }) => {
  return (
    <h1 className="text-lg md:text-2xl text-accent text-center uppercase tracking-wider">
      {text}
    </h1>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
