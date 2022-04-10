import React, { useState } from 'react';
import Main from '../Main/Main';

const Home = () => {
    
    const [number,setNumber]=useState(0);
    
    const handleChange= () => {
        setNumber(number+1)
    }

    return (
        <div>
            <h3>this is home</h3>
            <button onClick={handleChange}>click me</button>
            <h3>{number}</h3>
            
        </div>
    );
};

export default Home;