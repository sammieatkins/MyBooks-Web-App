import React from 'react';
import img from './MyBooksLogo.png';
import './App.css';

const e = React.createElement;
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

const domContainer = document.querySelector('#header');
const root = ReactDOM.createRoot(domContainer);
root.render(e(MakeHeader));
// export default MakeHeader