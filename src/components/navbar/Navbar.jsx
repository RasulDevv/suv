import { Link } from "react-router-dom";
import "./Navbar.css";
import NavToggle from "./NavToggle";
import { useState } from "react";
import NavList from "./NavList";
import toggleMenu from "../../utils/toggleMenu";
import logo from "../../images/logo.png";
import Searchbar from "../searchbar/Searchbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-link-logo">
          <img src={logo} alt="LOGO" className="nav-logo" />
        </Link>
        <Searchbar />
        <NavList isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  )
}
