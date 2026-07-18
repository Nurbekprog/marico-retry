import { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo.svg";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsUseCasesOpen(false);
  };

  return (
    <div className="navbar container">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h3>Marico</h3>
      </div>
      <ul className="nav-links">
        <li
          className={`dropdown ${isUseCasesOpen ? "open" : ""}`}
          onClick={() => setIsUseCasesOpen((prev) => !prev)}
        >
          Use Cases <ChevronDown size={16} />
          {isUseCasesOpen && (
            <ul className="dropdown-menu">
              <li>Use Case 1</li>
              <li>Use Case 2</li>
              <li>Use Case 3</li>
            </ul>
          )}
        </li>
        <li>About</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
      <button
        type="button"
        className={`menu-btn ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <div id="mobile-menu" className={`menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="menu-links">
          <li
            className={`dropdown ${isUseCasesOpen ? "open" : ""}`}
            onClick={() => setIsUseCasesOpen((prev) => !prev)}
          >
            Use Cases <ChevronDown size={16} />
            {isUseCasesOpen && (
              <ul className="dropdown-menu">
                <li>Use Case 1</li>
                <li>Use Case 2</li>
                <li>Use Case 3</li>
              </ul>
            )}
          </li>
          <li>About</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <div className="menu-buttons">
          <button type="button" className="login">
            Login
          </button>
          <button type="button" className="signup">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
