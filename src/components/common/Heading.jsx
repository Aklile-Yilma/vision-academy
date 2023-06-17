import PropTypes from "prop-types";

const Heading = ({ text }) => {
  return (
    <h1 className="md:text-2xl text-accent text-center uppercase tracking-wider text-3xl leading-none">
      {text}
    </h1>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
