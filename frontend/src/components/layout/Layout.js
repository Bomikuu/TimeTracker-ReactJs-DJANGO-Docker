import React, { Fragment } from "react";
import Logo from "../../img/clock.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        {/* <img src={Logo} className="header-logo" alt="Time Tracker" /> */}
        <span className="is-title"> Time Tracker </span>
      </div>

      <div className="vertical-divider" />
      <div className="header-navigation" />
    </div>
  );
};

const Footer = () => {
  return <Fragment />;
};

export { Header, Footer };
