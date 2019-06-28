import React from 'react';
import './style.scss';

function RadioButton({checked, name}) {
  return (
    <div className="radio-button" >
     <label>
            <input type="radio" name={name} value="option1" checked={checked} />
            Option 1
          </label>
    </div>
  );
}
export default RadioButton;
