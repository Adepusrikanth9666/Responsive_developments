import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
  return (
    <nav>
      <div className="nav_wrapper container">
        <div className="logo">AWW Camp </div>
        <ul className="nav_menu">
          <li className="nav_menu_items">
            <a href="">Home</a>
          </li>
          <li className="nav_menu_items">
            <a href="">About</a>
          </li>
          <li className="nav_menu_items">
            <a href="">Experience</a>
          </li>
          <li className="nav_menu_items">
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="nav_action_button">
          <button>Login/Register</button>
        </div>
        <div className="hamburger">
          {open ? (
            <AiOutlineClose onClick={handleClick} />
          ) : (
            <AiOutlineMenu onClick={handleClick} className="closeIcon" />
          )}
        </div>
      </div>
      <div className={open ? "nav_menu-mobile active" : "nav_menu-mobile"}>
        <li className="nav_menu_items">
          <a href="">Home</a>
        </li>
        <li className="nav_menu_items">
          <a href="">About</a>
        </li>
        <li className="nav_menu_items">
          <a href="">Experience</a>
        </li>
        <li className="nav_menu_items">
          <a href="">Contact</a>
        </li>
        <li className="mobile-menu-button">
          <button>Signin/Register</button>
        </li>
      </div>
    </nav>
  );
};

export default Header;
