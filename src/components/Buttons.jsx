import React, { useContext } from 'react';
import { MyContext } from './Counter';
import './style.css';
import { TYPE } from './Usage';

const Buttons = () => {
    const dispatch = useContext(MyContext);
    return (
        <div className='buttons-container'>
            <div className="button">
                <button onClick={() => dispatch({ type: TYPE.CHANGE_NUMBER, payload: 1 })}>Increment</button>
                <button onClick={() => dispatch({ type: TYPE.CHANGE_NUMBER, payload: -1 })}>Decrement</button>
            </div>
            <div className="button-color">
                <button className='green' onClick={() => dispatch({ type: TYPE.CHANGE_COLOR, payload: 'green' })}>Green</button>
                <button className='red' onClick={() => dispatch({ type: TYPE.CHANGE_COLOR, payload: 'red' })}>Red</button>
            </div>
        </div>
    );
};

export default Buttons;
