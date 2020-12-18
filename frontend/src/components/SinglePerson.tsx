import React, {ReactElement} from 'react'
import '../styles/person.css'
import {Person} from '../types'

type RemovePerson = (id: number) => Promise<Person>

type PersonProps = {
  person: Person
  removePerson: RemovePerson
}

const SinglePerson = ({person, removePerson}: PersonProps): ReactElement => {
  return (
    <div className="person">
      <p className="personName">{person.name}</p>
      <button className="personButton" onClick={() => removePerson(person.id)}>
        x
      </button>
    </div>
  )
}

export default SinglePerson
