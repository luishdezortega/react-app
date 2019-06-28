import React from 'react';
import './style.scss';
import ButtonNavbar from "../../atoms/button-option/button-option";
import Logo from "../../atoms/logo/logo";



const NavbarBox = () => {
  return (
    <div className="navbar-items">
      <Logo />
      <div className="navbar-options">
        <ButtonNavbar texto="Features" />
        <ButtonNavbar texto="Plans" />
        <ButtonNavbar texto="Organizations" />
        <ButtonNavbar texto="Browse courses" />
        <ButtonNavbar texto="Support" />
      </div>
    </div>
  );
}
export default NavbarBox;
