import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello world';

const elem = (
  <div>
    <h2 className='text'>Текст: {text} {2+2} {['2312314', '213123']}</h2> 
    <input type='text'></input>
    <label htmlFor=""></label>
    <button tabIndex={0}>Click</button>
  </div>
);

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello world');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
