import PropTypes from "prop-types";

const Space = ({ text }) => {
  if (text === "full") {
    return (
      <>
        <br />
        &nbsp;
      </>
    );
  }
  return (
    <>
      <br />
    </>
  );
};

Space.propTypes = {
  text: PropTypes.string.isRequired,
};

Space.defaultProps = {
  text: "full",
};

export default Space;
