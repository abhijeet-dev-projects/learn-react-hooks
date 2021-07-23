import React, { useState, useRef } from 'react';

const UseRefDemo = () => {

    const [text, setText] = useState('');

    let x = useRef(0);

    const handleChange = e => {
        setText(e.target.value);
        x.current = x.current + 1;
    }
    
    return (
        <>
          Phone Number: <input type="text" value={text} onChange={handleChange} style={{display: 'block'}} />
          {`Render method was called ${x.current} times`} 
        </>
    );
}

export default UseRefDemo;
