import PropTypes from "prop-types";

const Button = ({ level, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {level}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  level: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
