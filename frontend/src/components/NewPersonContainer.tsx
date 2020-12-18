import React from 'react'
import PersonForm from './PersonForm'
import useField from '../helpers/useField'
import personService from '../services/personService'
import {Person} from '../types'

type AddPerson = (persons: Person[]) => any

type NewPersonContainerProps = {
  persons: Person[]
  setPersons: AddPerson
}

const NewPersonContainer = ({persons, setPersons}: NewPersonContainerProps) => {
  const name = useField('text')

  const handleSubmit = async (e: React.ChangeEvent) => {
    e.preventDefault()
    const res = await personService.createPerson(name.value)
    if (res.error) return
    setPersons([...persons, res.data])
  }

  return <PersonForm handleSubmit={handleSubmit} name={name} />
}

export default NewPersonContainer