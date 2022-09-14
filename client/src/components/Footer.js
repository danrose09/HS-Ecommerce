import React from "react";
import FooterEmail from "./footer-components/FooterEmail";
import FooterGridItems from "./footer-components/FooterGridItems";
import FooterSocials from "./footer-components/FooterSocials";
import FooterSocialsSmall from "./footer-components/FooterSocialsSmall";

const Footer = () => {
  return (
    <div className="footer-container">
      <FooterEmail />
      <hr className="footer-divider"></hr>
      <FooterGridItems />
      <hr className="footer-divider"></hr>
      <FooterSocials />
      <FooterSocialsSmall />
    </div>
  );
};

export default Footer;
