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
      console.log(result)
    }

    fetchData()
  }, [])

  const removePerson = id => {
    const result = persons.filter(person => !(person.id === id))
    setPersons(result)
  }

  const personRows = () => {
    console.log('persons: ', persons)
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