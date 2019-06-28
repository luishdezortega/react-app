import React from 'react';
import './style.scss';
import RadioButton from "../../atoms/radio-button/radio-button";


const BoxRadioButton = () => {
  let name = "check";

  return (
    <div className="box-radio-buttons">
      <div className="button-container">
        <p>Course type</p>
        <RadioButton name={name} text="Self paced" />
        <RadioButton name={name} text="Live" />
      </div>
      <div className="button-container">
        <p>Delivery type</p>
        <RadioButton name={name} text="Any delivery type" />
        <RadioButton name={name} text="Computer-Based Training" />
        <RadioButton name={name} text="Correspondence" />
        <RadioButton name={name} text="Mailed Material" />
      </div>
      <div className="button-container">
        <p>Subject area</p>
        <RadioButton name={name} text="Any subject type" />
        <RadioButton name={name} text="HIV/AIDS" />
        <RadioButton name={name} text="End-of-life Care and Palliative health Care" />
        <RadioButton name={name} text="Domestic Violence" />
      </div>
    </div>
  );
}
export default BoxRadioButton;
