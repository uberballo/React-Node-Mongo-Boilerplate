import { AxiosResponse } from 'axios'
import { GenericFunc } from '../types'

export const tryCatchWrapper = async (func: GenericFunc): Promise<AxiosResponse> => {
  try {
      const res = await func()
      return res
  } catch (e) {
    return  e
  }
}