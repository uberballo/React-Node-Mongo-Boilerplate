import React, {ReactElement} from 'react'
import PersonForm from './PersonForm'
import useField from '../helpers/useField'
import personService from '../services/personService'
import {Person} from '../types'

type AddPerson = (persons: Person[] | any) => Person

type NewPersonContainerProps = {
  persons: Person[]
  setPersons: AddPerson
}

const NewPersonContainer = ({
  persons,
  setPersons,
}: NewPersonContainerProps): ReactElement => {
  const name = useField('text')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const res = await personService.createPerson(name.value)
    if (res.error) return
    setPersons([...persons, res.data])
  }

  return <PersonForm handleSubmit={handleSubmit} name={name} />
}

export default NewPersonContainer
