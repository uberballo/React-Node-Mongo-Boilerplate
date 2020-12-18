import axios from 'axios'
import {Person} from '../types'

const baseUrl = '/api/person'

type ServiceResponse = {
  data: Person
  error?: String
}

const tryCatchWrapper = async (func: any): Promise<any> => {
  try {
    const res = await func()
    return res
  } catch (e) {
    return {
      error: e,
    }
  }
}

const getPersons = async (): Promise<ServiceResponse> => {
  const res = await tryCatchWrapper(() => axios.get<Person[]>(baseUrl))
  console.log(res)
  return res
}

const createPerson = async (name: string): Promise<ServiceResponse> => {
  const res = await tryCatchWrapper(() =>
    axios.post(baseUrl, {
      name: name,
    })
  )
  return res
}

const removePerson = async (id: number) => {
  const res = await tryCatchWrapper(() => axios.delete(`${baseUrl}/${id}`))
  return res
}

export default {getPersons, createPerson, removePerson}
