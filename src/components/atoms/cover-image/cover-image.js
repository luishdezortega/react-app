import React from 'react';
import './style.scss';

const url = 'https://storage.cebroker.com/CEBroker/';

const CoverImage = ({ keyUri }) => {
  return (
    <div className="cover-image" >
        <img src={url+keyUri} alt={keyUri} />
    </div>
  );
}

export default CoverImage;
