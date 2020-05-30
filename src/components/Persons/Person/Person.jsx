import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click} >This person {props.name} component and value {props.value} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;