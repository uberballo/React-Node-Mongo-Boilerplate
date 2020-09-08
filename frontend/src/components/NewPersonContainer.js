import React from 'react'
import PersonForm from './PersonForm'
import useField from '../helpers/useField'
import personService from '../services/personService'

const NewPersonContainer = ({persons, setPersons}) => {
  const name = useField('text')

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await personService.createPerson(name.value)
    if (res.error) return
    setPersons([...persons, res.data])
  }

  return <PersonForm handleSubmit={handleSubmit} name={name} />
}

export default NewPersonContainer
