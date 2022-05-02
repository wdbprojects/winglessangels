import React from "react";

const Footer = () => {
  return (
    <footer className="mainFooter">
      <div className="container">
        <div className="mainFooter__text">
          <p>Hi Paws &copy; {new Date().getFullYear()} - all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
