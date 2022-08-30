import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Menu = (props) => {
  const { menuIsHidden } = props;

  return (
    <div className="menu-hidden menu" hidden={menuIsHidden}>
      <div>Menu</div>
      <div>
        <FontAwesomeIcon className="chevron-left" icon={faChevronLeft} />
      </div>
    </div>
  );
};

export default Menu;
