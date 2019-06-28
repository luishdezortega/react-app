import React from 'react';
import './style.scss';
import logo from './../../../assets/imgs/logo.png';

function LogoSite() {
  return (
    <div className="logo" >
      <figure>
        <img src={logo} alt="logo"/>
      </figure>
    </div>
  );
}

export default LogoSite;
