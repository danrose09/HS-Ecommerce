import React from "react";

const FooterEmail = () => {
  return (
    <div>
      <div className="footer__email--container">
        <div>
          <p className="footer__email--description">
            Be the first to know about new patterns and collections.
          </p>
          <div style={{ width: "100%" }}>
            <form>
              <input className="footer__email--input" type="email"></input>
              <hr className="footer-divider"></hr>
              <div>
                <p className="footer__email--label">Email</p>
                <button className="footer__email--signup-button" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterEmail;
