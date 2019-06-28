import React from 'react';
import './style.scss';
import ButtonOption from "../../atoms/button-option/button-option";
import IconTime from "./../../../assets/imgs/clock.png"
import IconLaptop from "./../../../assets/imgs/laptop.png"


const BoxCourseTwo = ({ item }) => {
    let title = item.course.name;
    let descripcion = item.course.deliveryMethod.description;
    let provider = item.course.provider.name;
    let price = item.price;



    return (
        <div className="box-course-all"  >
            <div className="container">
                <h2>{title}</h2>
                <label className="featured">FEATURED</label>
                <p>{provider}</p>
                <div className="container-information" >
                    <label><img src={IconTime} alt="clock-icon" />2 Hour</label>
                    <label><img src={IconLaptop} alt="laptop-icon" />{descripcion}</label>
                </div>
            </div>

            <div className="continer-price">
                <h2>${price}</h2>
                <ButtonOption />
            </div>

        </div>
    );
}

export default BoxCourseTwo;
