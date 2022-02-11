import React from "react";

type Props = {};

const Footer = (props: Props) => {
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
