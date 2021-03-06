import React from 'react';
import './style.scss';
import Search from './../../atoms/search/search';

const Header = ({ handleChange } ) => {

    const change = ( value ) => {
        if(value.length > 2) {
            // console.log(value);
            handleChange(value);
        }
    }

    return (
        <div className="header"  >
        <Search/>
        <input type="text" onChange={(event)=>change(event.target.value)} />
        </div>
    );
}

export default Header;
