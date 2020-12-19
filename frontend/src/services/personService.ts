import axios, { AxiosResponse } from 'axios'
import {Person} from '../types'

const baseUrl = '/api/person'

type RequestInput = number | string | void

type GenericFunc = (input: RequestInput) => Promise<AxiosResponse>


const tryCatchWrapper = async (func: GenericFunc): Promise<AxiosResponse> => {
  try {
      const res = await func()
      return res
  } catch (e) {
    return  e
  }
}

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
