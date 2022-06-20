import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          <span>Developed by &copy;</span>
          <a href="https:/t.me/nosanctuary" className="footer__link">
            Dmitry Doroshko
          </a>
          <span>with love!</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
