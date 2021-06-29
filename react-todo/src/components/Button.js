import PropTypes from 'prop-types';

const Button = ({ text, color }) => {
  return (
    <div>
      <button className="btn" style={{backgroundColor: color}}>{text}</button>
    </div>
  );
};

Button.defaultProps = {
  text: 'Add',
  color: 'grey',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
