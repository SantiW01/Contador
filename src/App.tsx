import React, { useState } from 'react';
import './Styles/App.scss';

export default function App() {
  const [counter, setCounter] = useState<number>(0)
  return(
    <div className=' vh-100 row justify-content-center align-items-center'>
      <div className='col-auto p-5 text-center'>
        <h1 id='showCounter'>{counter}</h1>
        <div id='buttons'>
          <button className='me-2' id='increaseButton' onClick={() => setCounter(counter + 1)}>Increase</button>
          <button className='me-2' id='decreaseButton' onClick={() => setCounter(counter - 1)}>Decrease</button>
        </div>
      </div>
    </div>
  )
}