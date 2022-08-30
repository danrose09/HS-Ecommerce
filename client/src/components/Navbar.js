import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuIsHidden, setMenuIsHidden] = useState(Boolean(true));

  const handleMenuVisibility = () => {
    setMenuIsHidden(false);
  };
  return (
    <div>
      <Menu menuIsHidden={menuIsHidden} />

      <div className="navbar" style={{ display: !menuIsHidden && "none" }}>
        <nav className="navbar-nav">
          <FontAwesomeIcon
            className="nav-icon navbar-sandwich-menu"
            icon={faGripLines}
            onClick={handleMenuVisibility}
          />
          <ul className="nav-left-items">
            <li className="nav-item">WOMEN</li>
            <li className="nav-item">MEN</li>
            <li className="nav-item">COLLECTIONS </li>
          </ul>
          <FontAwesomeIcon
            className="logo"
            icon={faAnchor}
            onClick={() => navigate("/")}
          />
          <ul className="nav-right-items">
            <li className="nav-item">SEARCH</li>
            <li className="nav-item">SIGN IN</li>
            <li className="nav-item">BAG</li>
          </ul>
          <div className="nav-icons-right">
            <FontAwesomeIcon
              className="nav-icon search-icon"
              icon={faMagnifyingGlass}
            />
            <FontAwesomeIcon className="nav-icon" icon={faShoppingBag} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
