import React, { createContext, useReducer } from 'react';
import Buttons from './Buttons';
import './style.css';
import UsageReducer from './Usage';

const MyContext = createContext();

const initialState = {
    number: 0,
    color: ''
};

const Counter = () => {
    const [state, dispatch] = useReducer(UsageReducer, initialState);
    return (
        <div className='counter-container'>
            <h1 style={{ backgroundColor: state.color }}>{state.number}</h1>
            <MyContext.Provider value={dispatch}>
                <Buttons />
            </MyContext.Provider>
        </div>
    );
};

export default Counter;
export { MyContext };
