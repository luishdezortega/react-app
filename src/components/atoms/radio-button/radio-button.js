import React from 'react';
import './style.scss';

function RadioButton({ text, name }) {
  return (
    <div className="radio-button" >
      <label>
        <input type="radio" name={name} />
        <div>
          {text}
        </div>
      </label>
    </div>
  );
}
export default RadioButton;
