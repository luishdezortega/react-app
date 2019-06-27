import React from 'react';
import './style.scss';
import ButtonOption from "../../atoms/button-option/button-option";
import IconTime from "./../../../assets/imgs/clock.png"
import IconLaptop from "./../../../assets/imgs/laptop.png"


const BoxCourseTwo = ({ item }) => {  
    let title = item.coursePublication.course.name;
    let descripcion = item.coursePublication.course.provider.name;


    return (
        <div className="box-course"  >
            <div className="container">
                <h2>{title}</h2>
                <label className="featured">FEATURED</label>
                <p>{descripcion}</p>
                <div className="container-information" >
                    <label><img src={IconTime} alt="clock-icon" />2 Hour</label>
                    <label><img src={IconLaptop} alt="laptop-icon" />Computer-Based Training</label>
                </div>
            </div>

            <div className="continer-price">
                <h2>$20.0</h2>
                <ButtonOption />
            </div>

        </div>
    );
}

export default BoxCourseTwo;
