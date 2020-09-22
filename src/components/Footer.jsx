import React, { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <div className="footer-container">
        <footer className="row container mx-auto">
          <div>
            <span className="footer-title">Support</span>
            <ul>
              <li>Help</li>
              <li>Contact</li>
              <li>Community</li>
              <li>Hostify Status</li>
            </ul>
          </div>
          <div>
            <span className="footer-title">Our Team</span>
            <ul>
              <li>About</li>
              <li>Web</li>
            </ul>
          </div>
          <div>
            <span className="footer-title">Terms</span>
            <ul>
              <li>Policies</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
            </ul>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Footer;
