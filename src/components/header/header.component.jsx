import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

import logo from "../../assets/logo.png";

import "./header.styles.scss";

export function Header() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="header__container">
      <div className="header__LeftSide">
        <div className="header__menu">
          <GiHamburgerMenu size={25} />
          <span>Menu</span>
        </div>
      </div>

      <div className="header__middleSide">
        <img onClick={refreshPage} className="header__logo" src={logo} alt="" />
      </div>

      <div className="header__rightSide">
        <AiOutlineSearch className="header__icon" size={25} />
        <AiOutlineUser className="header__icon" size={25} />
        <AiOutlineHeart className="header__icon" size={25} />
        <BiShoppingBag className="header__icon" size={25} />
      </div>
    </div>
  );
}
