const Person = require('../models/person')


const getPersons = async (req, res ) => {
    const result = await Person.find({})
    res.status(200).json(
        result
    )
}

const addPerson = (req, res) =>{
    const body = req.body
    if (body.name === undefined) {
        return res.status(400).json({error: 'name missing'})
    }

    const person = new Person({
        name: body.name
    })

    person.save().then(savedPerson => {
        res.json(savedPerson).status(201)
    })

}

module.exports = {
    getPersons,
    addPerson
}