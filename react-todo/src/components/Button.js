import PropTypes from "prop-types";

const Button = ({ text, color, onClick }) => {
  return (
    <div>
      <button className="btn" onClick={onClick} style={{ backgroundColor: color }}>
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  text: "Add",
  color: "grey",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
