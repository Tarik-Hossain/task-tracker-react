import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>

        <Button color="green" level="Submit" />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = { color: "blue", backgroundColor: "red" };
export default Header;
