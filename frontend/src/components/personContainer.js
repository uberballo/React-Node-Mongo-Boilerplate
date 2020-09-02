import React, {useState, useEffect} from 'react'
import personService from "../services/personService";
import Person from "./person";

const PersonContainer = () =>{
    const [persons, setPersons] = useState([])


    useEffect(() => {
        async function fetchData() {
            const result = await personService.getPersons()
            setPersons(result)}
            fetchData()
    },[])

    const personRows = () =>{
        console.log(persons)

       return persons?.map(person =>
        <Person person={person} key={person.id}/>

        )
}


    return(
        <div>
        <ul>
            {personRows()}
        </ul>
        </div>
    )
}

export default PersonContainer