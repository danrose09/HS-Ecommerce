import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuState, toggleMenu } from "../features/menuSlice";
import { getLogoState, toggleLogo } from "../features/logoSlice";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleMenuLogoVisibility = () => {
    dispatch(toggleMenu({ showMenu: !showMenu }));
    dispatch(toggleLogo({ showLogo: !showLogo }));
  };

  const showMenu = useSelector(getMenuState);
  const showLogo = useSelector(getLogoState);

  return (
    <div>
      <div className="navbar">
        <nav className="navbar-nav">
          <FontAwesomeIcon
            className="nav-icon navbar-sandwich-menu"
            icon={faGripLines}
            onClick={handleMenuLogoVisibility}
          />
          <ul className="nav-left-items">
            <li
              className="nav-item patterns"
              onClick={handleMenuLogoVisibility}
            >
              PATTERNS
            </li>
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
        <div hidden={!showMenu}>
          <Menu />
        </div>
      </div>
      <Logo />
    </div>
  );
};

export default Navbar;
