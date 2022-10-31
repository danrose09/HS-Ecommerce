import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLogoState } from "../features/logoSlice";

const Logo = () => {
  const navigate = useNavigate();
  const showLogo = useSelector(getLogoState);
  return (
    <div className="logo-container">
      <img
        src="/images/logo-black.png"
        className={showLogo ? "logo fade-out-logo" : "logo fade-in-logo"}
        onClick={() => navigate("/")}
        height={50}
        width={150}
        alt="logo"
        hidden={!showLogo}
      />
    </div>
  );
};

export default Logo;
