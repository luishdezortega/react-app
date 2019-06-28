import React from 'react';
import './style.scss';
import Arrow from './../../../assets/imgs/arrow-left.png';


function ArrowLeft({handleClick}) {
  return (
    <div className="arrow-option" onClick={handleClick} >
      <figure>
        <img src={Arrow} alt="arrow-left"/>
      </figure>
    </div>
  );
}

export default ArrowLeft;
