import React from 'react';
import './style.scss';
import icon from './../../../assets/imgs/search.png';

function SearchIcon() {
  return (
    <div className="search" >
      <figure>
        <img src={icon} alt="search"/>
      </figure>
    </div>
  );
}

export default SearchIcon;
