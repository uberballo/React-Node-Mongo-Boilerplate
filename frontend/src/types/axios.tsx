import { AxiosResponse } from 'axios'

export type RequestInput = number|string|void

export type GenericFunc = (input: RequestInput) => Promise<AxiosResponse>