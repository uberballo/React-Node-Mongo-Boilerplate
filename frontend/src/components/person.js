import React from 'react'
import '../styles/person.css'

const Person = ({person, removePerson}) => {
  return (
    <div className="person">
      <p className="personName">{person.name}</p>
      <button className="personButton" onClick={() => removePerson(person.id)}>
        x
      </button>
    </div>
  )
}

export default Person
