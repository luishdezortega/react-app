import React from 'react';
import './style.scss';


function ButtonOption({texto}) {
  return (
    <div className="button-option" >
      <p>{texto}</p>
    </div>
  );
}

export default ButtonOption;
