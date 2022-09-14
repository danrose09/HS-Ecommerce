import React from "react";

const FooterEmail = () => {
  return (
    <div>
      <div className="footer-email-container">
        <div>
          <p className="footer-email-description">
            Be the first to know about new patterns and collections.
          </p>
          <div style={{ width: "100%" }}>
            <form>
              <label>Email</label>
              <input className="footer-email-input" type="email"></input>
              <button className="footer-email-signup-button" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterEmail;
