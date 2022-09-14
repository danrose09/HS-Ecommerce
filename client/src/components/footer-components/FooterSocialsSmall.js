import React from "react";

const FooterSocialsSmall = () => {
  return (
    <div>
      <div className="socials-container-small">
        <i
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="fa-solid fa-arrow-up-from-bracket back-to-top back-to-top-hover"
        ></i>

        <p className="socials-text-version">Instagram</p>
        <p className="socials-text-version">Facebook</p>
        <p className="socials-text-version">Twitter</p>
        <p className="socials-text-version">YouTube</p>
      </div>
    </div>
  );
};

export default FooterSocialsSmall;
