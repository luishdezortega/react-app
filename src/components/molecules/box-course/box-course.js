import React from 'react';
import './style.scss';
import ButtonOption from "../../atoms/button-option/button-option";
import CoverImage from "../../atoms/cover-image/cover-image";

const  BoxCourse = ({ item }) => {
  let image = item.coursePublication.course.featuredBanner;

  return (
    <div className="box-course"  >

      <CoverImage keyUri={image}  />

      <div className="container-text" >
        <h2>Prevent Medical</h2>
        <label>featured</label>
        <p>Florida ospital</p>
        <div className="container-information" >
          <label>2 Hour</label>
          <label>Computer-Based Training</label>
        </div>
      </div>

      <div className="continer-price">
        <h2>$20.0</h2>
        <ButtonOption />
      </div>
      
    </div>
  );
}

export default BoxCourse;
