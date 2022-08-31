import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMenuState, toggleMenu } from "../features/menuSlice";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenuVisibility = () => {
    dispatch(toggleMenu({ showMenu: true }));
  };

  const showMenu = useSelector(getMenuState);

  return (
    <div>
      <div hidden={!showMenu}>
        <Menu />
      </div>
      <div className="navbar" style={{ display: showMenu && "none" }}>
        <nav className="navbar-nav">
          <FontAwesomeIcon
            className="nav-icon navbar-sandwich-menu"
            icon={faGripLines}
            onClick={handleMenuVisibility}
          />
          <ul className="nav-left-items">
            <li className="nav-item">PATTERNS</li>
            <li className="nav-item">COLLECTIONS </li>
          </ul>

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
      <div className="logo-container">
        <img
          src="/images/logo-black.png"
          className="logo"
          onClick={() => navigate("/")}
          height={50}
          width={150}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
