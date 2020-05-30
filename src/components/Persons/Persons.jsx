import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return <Person
        click={() => props.clicked(index)}
        name={person.name}
        value={person.value}
        key={person.id}
        changed={(event) => props.changed(event, person.id)} />
})

export default persons;