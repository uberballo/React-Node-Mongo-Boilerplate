import axios, { AxiosResponse } from 'axios'
import {Person, RequestInput} from '../types'
import { tryCatchWrapper } from '../utils/axiosWrapper'

const baseUrl = '/api/person'

const getPersons = async (): Promise<AxiosResponse> => {
  const res = await tryCatchWrapper(() => axios.get<Person[]>(baseUrl))
  console.log(res)
  return res
}

const createPerson = async (name: RequestInput): Promise<AxiosResponse> => {
  const res = await tryCatchWrapper(() =>
    axios.post(baseUrl, {
      name: name,
    })
  )
  return res
}

const removePerson = async (id: RequestInput): Promise<AxiosResponse> => {
  const res = await tryCatchWrapper(() => axios.delete(`${baseUrl}/${id}`))
  return res
}

export default {getPersons, createPerson, removePerson}
