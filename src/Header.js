import React from 'react';
import img from './MyBooksLogo.png';
import './App.css';

function MakeHeader() { 
    return(
        <div>
            <img src={img} alt='logo' className='logo'></img>
            <header>
                <nav>
                    <a href='./App.js'>Home</a>
                    <a href='./Books.js'>Books</a>
                </nav>
            </header>
        </div>
    )
}

export default MakeHeader