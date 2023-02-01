import logo from "../assets/react.svg";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <nav className={darkMode ? "dark" : ""}>
        <div className="nav-items">
          <img src={logo} alt="React-Logo" className="nav-logo" />
          <h3 className="nav--logotext">ReactFacts</h3>
        </div>
        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
