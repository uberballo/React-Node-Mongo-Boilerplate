import React, {useState, useEffect} from 'react'
import personService from '../services/personService'
import Person from './Person'
import NewPersonContainer from './NewPersonContainer'

const PersonContainer = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await personService.getPersons()
      setPersons(result)
    }

    fetchData()
  }, [])

  const removePerson = async id => {
    const removed = await personService.removePerson(id)
    if (removed.status === 204) {
      const result = persons.filter(person => !(person.id === id))
      setPersons(result)
    }
  }

  const personRows = () => {
    return persons?.map(person => (
      <Person person={person} key={person.id} removePerson={removePerson} />
    ))
  }

  return (
    <div>
      <NewPersonContainer persons={persons} setPersons={setPersons} />
      <ul>{personRows()}</ul>
    </div>
  )
}

export default PersonContainer
