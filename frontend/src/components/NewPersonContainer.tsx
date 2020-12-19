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
  const name = useField('text')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const res = await personService.createPerson(name.value)
    if (res.status !== 201) return
    setPersons([...persons, res.data])
  }

  return <PersonForm handleSubmit={handleSubmit} name={name} />
}

export default NewPersonContainer
