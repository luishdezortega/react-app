import React from 'react';
import './style.scss';
import arrow from './../../../assets/imgs/arrow.png';

function ButtonOption() {
  return (
    <div className="button-option" >
      <figure>
        <img src={arrow} alt="arrow-right"/>
      </figure>
    </div>
  );
}

export default ButtonOption;
