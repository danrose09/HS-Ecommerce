import React from "react";

const FooterSocials = () => {
  return (
    <div className="socials-container">
      <div className="back-to-top-container">
        <i
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="fa-solid fa-arrow-up-from-bracket back-to-top back-to-top-hover"
        ></i>
      </div>
      <div className="socials-icons">
        <p className="socials-text-version">Instagram</p>
        <p className="socials-text-version">Facebook</p>
        <p className="socials-text-version">Twitter</p>
        <p className="socials-text-version">YouTube</p>
      </div>
    </div>
  );
};

export default FooterSocials;
