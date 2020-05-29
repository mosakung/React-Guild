import React, { useState } from 'react';
import './App.css';
import Person from './componentFeature/Person';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 0, name: 'Max', value: 10 },
      { id: 1, name: 'Mos', value: 20 },
      { id: 2, name: 'Mek', value: 30 }
    ],
    showPersons: false
  });

  const nameChangedHandler = (event, parameterId) => {
    const personIndex = personsState.persons.findIndex(person => {
      return person.id === parameterId;
    });

    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons], status = personsState.showPersons;
    persons[personIndex] = person;

    setPersonsState({
      persons: persons,
      showPersons: status
    });
  }

  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState.persons], status = personsState.showPersons;
    persons.splice(personIndex, 1);
    setPersonsState({
      persons: persons,
      showPersons: status
    });
  }

  const togglePersonHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      persons: personsState.persons,
      showPersons: !doesShow
    });
  }

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        {
          personsState.persons.map((persons, index) => {
            return <Person
              click={() => deletePersonHandler(index)}
              name={persons.name}
              value={persons.value}
              key={persons.id}
              changed={(event) => nameChangedHandler(event, persons.id)} />
          })
        }
      </div>
    );
  }


  const classes = [];
  if (personsState.persons.length >= 2) {
    classes.push('red');
  }
  if (personsState.persons.length >= 1) {
    classes.push('bold');
  }

  return (
    <div className="App">
      <header><h1>Hello, Mos welcome to react learning</h1></header>
      <p className={classes.join(' ')}>I'm paragraph</p>
      <button className="button" onClick={togglePersonHandler}>Toggle Show</button>
      {persons}
    </div>
  );
}

export default App;

