import axios from 'axios'

const baseUrl = '/api/person'

const tryCatchWrapper = async func => {
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
  const res = await tryCatchWrapper(() => axios.get(baseUrl))
  return res.data
}

const createPerson = async name => {
  const res = await tryCatchWrapper(() =>
    axios.post(baseUrl, {
      name: name,
    })
  )
  return res
}

const removePerson = async id => {
  try {
    const res = await axios.post(baseUrl, {
      id: id,
    })
    return res
  } catch (e) {
    return {
      error: e,
    }
  }
}

export default {getPersons, createPerson}
