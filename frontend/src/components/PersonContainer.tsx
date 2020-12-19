import React, {useState, useEffect} from 'react'
import personService from '../services/personService'
import SinglePerson from './SinglePerson'
import NewPersonContainer from './NewPersonContainer'
import {Person} from '../types'

const PersonContainer = () => {
  const [persons, setPersons] = useState<Person[] >([])

  useEffect(() => {
    async function fetchData() {
      const result = await personService.getPersons()
      const fetchedPeople = result.data
      if (result.status === 200) {
        setPersons(fetchedPeople)
      }
    }

    fetchData()
  }, [])

  const removePerson = async (id: number) => {
    const removed = await personService.removePerson(id)
    if (removed.status === 204) {
      const result = persons.filter(person => !(person.id === id))
      setPersons(result)
    }
  }

  const personRows = () => {
    return persons?.map(person => (
      <SinglePerson
        person={person}
        key={person.id}
        removePerson={removePerson}
      />
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
