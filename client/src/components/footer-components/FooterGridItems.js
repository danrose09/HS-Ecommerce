import React, { useState } from "react";
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
          return <li className="footer-grid-list-item">{subheading}</li>;
        })}
      </ul>
    );
    return (
      <div className="footer-grid-item" key={index}>
        <div
          className="footer-name-icon-container"
          onClick={() => toggle(index)}
        >
          <p className="footer-grid-category-name">{item.name}</p>

          {index === clicked ? (
            <i className="fa-regular fa-minus plus-minus-icon"></i>
          ) : (
            <i className="fa-regular fa-plus plus-minus-icon"></i>
          )}
        </div>
        {index === clicked && dropDown}
        <ul className="footer-grid-list">
          {item.subHeadings.map((subheading) => {
            return <li className="footer-grid-list-item">{subheading}</li>;
          })}
        </ul>
      </div>
    );
  });

  return <div className="footer-grid">{gridItems}</div>;
};

export default FooterGridItems;
