import axios from "axios"

const baseUrl = "/api/person"

const getPersons = async () => {
    try{
        const res = await axios.get(baseUrl)
        console.log(res)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export default {getPersons}