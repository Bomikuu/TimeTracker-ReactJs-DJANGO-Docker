import React, { Fragment } from "react";

const Header = () => {
  return (
    <div className="header-container">
      {/* <img className="header-logo" alt="Time Tracker" /> */}
      <span className="is-title"> Time Tracker </span>

      <div className="vertical-divider" />
      <div className="header-navigation">
        <span> Dashboard </span>
        <span> Employee </span>
        <span> Projects </span>
      </div>
    </div>
  );
};

const Footer = () => {
  return <Fragment />;
};

export { Header, Footer };
