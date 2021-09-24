import React from "react";

import "./footer.styles.scss";

export function Footer() {
  return (
    <div className="footer__container">
      <ul className="footer__listContainer">
        <li className="footer__listElement">Terms and conditions</li>
        <li className="footer__listElement">GDPR & personal data</li>
        <li className="footer__listElement">Cookie policy</li>
        <li>Update cookie settings</li>
      </ul>
      <div className="footer__label">@ BOOZT.COM 2021 By Alex Wong</div>
    </div>
  );
}
