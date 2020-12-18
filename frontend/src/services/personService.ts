import axios from 'axios'
import {Person} from '../types'

const baseUrl = '/api/person'

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

const getPersons = async () => {
  const res = await axios.get<Person[]>(baseUrl)
  console.log(res)
  return res
}

const createPerson = async (name: any) => {
  const res = await tryCatchWrapper(() =>
    axios.post(baseUrl, {
      name: name,
    })
  )
  return res
}

const removePerson = async (id: any) => {
  const res = await tryCatchWrapper(() => axios.delete(`${baseUrl}/${id}`))
  return res
}

export default {getPersons, createPerson, removePerson}
