import React, { useRef } from 'react';

const FormFocus = props => {

    let nameInput = useRef();
    let ageInput = useRef();

    const handleNameClick = e => {
        e.preventDefault();
        nameInput.current.focus();
    }

    const handleAgeClick = e => {
        e.preventDefault();
        ageInput.current.focus();
        
    }

    const handlePhnNumberClick = () => {
        console.log('qwerty ');
    }

    return (
        <form>
            Name: <input 
                    type="text" 
                    name="name" 
                    ref={nameInput} 
                    style={{display: 'block'}} 
                    onFocus={() => console.log('name input is focused now')}
                />
            Age: <input 
                    type="text" 
                    name="age" 
                    style={{display: 'block'}}
                    ref={ageInput}
                    onFocus={() => console.log('age input is focused now')} 
                />
            <button onClick={handleNameClick}>Click to focus name</button>
            <button onClick={handleAgeClick}>Click to focus age</button>
            <div 
                onClick={handlePhnNumberClick} 
                style={{display: 'inline-block', border:'1px solid black'}}
            >
                Click to focus Phone Number
            </div>
        </form>
    );
}

export default FormFocus;
