import React, {Dispatch, ReactElement, SetStateAction} from 'react'
import PersonForm from './PersonForm'
import useField from '../utils/useField'
import personService from '../services/personService'
import {Person} from '../types'

type NewPersonContainerProps = {
  persons: Person[]
  setPersons: Dispatch<SetStateAction<Person[]>>
}

const NewPersonContainer = ({
  persons,
  setPersons,
}: NewPersonContainerProps): ReactElement => {
  const nameField = useField('text')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const res = await personService.createPerson(nameField.value)
    if (res.status !== 201) return
    setPersons([...persons, res.data])
  }

  return <PersonForm handleSubmit={handleSubmit} nameField={nameField} />
}

export default NewPersonContainer
