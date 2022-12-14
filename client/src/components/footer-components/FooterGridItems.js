import React, { useState } from "react";
import { Link } from "react-router-dom";
import footerGridItems from "../../data/footerGridItems";

const FooterGridItems = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(false);
    }
    setClicked(index);
  };

  const gridItems = footerGridItems.map((item, index) => {
    const dropDown = (
      <ul className="footer-grid-list-sm">
        {item.subHeadings.map((subheading) => {
          return (
            <li className="footer-grid-list-item footer-list-dropdown">
              <Link to={`/${subheading}`} className="footer-grid-list-link">
                {subheading}
              </Link>
            </li>
          );
        })}
      </ul>
    );
    return (
      <div className="footer__grid--item" key={index}>
        <div
          className="footer__grid--item-container"
          onClick={() => toggle(index)}
        >
          <p className="footer__grid--category">{item.name}</p>

          {index === clicked ? (
            <i className="fa-regular fa-minus plus-minus-icon"></i>
          ) : (
            <i className="fa-regular fa-plus plus-minus-icon"></i>
          )}
        </div>
        {index === clicked && dropDown}
        <ul className="footer-grid-list">
          {item.subHeadings.map((subheading) => {
            return (
              <li className="footer-grid-list-item">
                <Link to={`/${subheading}`} className="footer-grid-list-link">
                  {subheading}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return <div className="footer__grid">{gridItems}</div>;
};

export default FooterGridItems;
