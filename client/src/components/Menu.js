import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../features/menuSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const dispatch = useDispatch();

  const handleMenuVisibility = () => {
    dispatch(toggleMenu({ showMenu: false }));
  };
  return (
    <div className="menu-hidden menu">
      <div>Menu</div>
      <div>
        <FontAwesomeIcon
          className="chevron-left"
          icon={faChevronLeft}
          onClick={handleMenuVisibility}
        />
      </div>
    </div>
  );
};

export default Menu;
