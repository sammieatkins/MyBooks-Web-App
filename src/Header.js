import React from 'react';
import img from './MyBooksLogo.png';
import './App.css';

function MakeHeader() { 
    return(
        <div>
            <img src={img} alt='logo' className='logo'></img>
        </div>
    )
}

export default MakeHeader