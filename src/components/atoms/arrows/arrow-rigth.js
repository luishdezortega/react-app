import React from 'react';
import './style.scss';
import Arrow from './../../../assets/imgs/arrow-rigth.png';

function ArrowRight({handleClick}) {
  return (
    <div className="arrow-option" onClick={handleClick} >
      <figure>
        <img src={Arrow} alt="arrow-right"/>
      </figure>
    </div>
  );
}
export default ArrowRight;
