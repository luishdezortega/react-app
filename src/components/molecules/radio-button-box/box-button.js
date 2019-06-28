import React from 'react';
import './style.scss';
import RadioButton from "../../atoms/radio-button/radio-button";


const BoxRadioButton = ({ item }) => {
  let name = "check";
  let id = "buttonOne";

  return (
    <div className="button-container">      
      <RadioButton name={name} />
      <RadioButton name={name}/>
      <RadioButton name={name} />
    </div>
  );
}

export default BoxRadioButton;
