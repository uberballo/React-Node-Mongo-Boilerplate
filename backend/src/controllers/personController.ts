const Person = require('../models/person')
import {Request, Response} from 'express'

const getPersons = async (_req: Request, res: Response) => {
  const result = await Person.find({})
  console.log(result)
  res.status(200).json(result)
}

const addPerson = async (req: Request, res: Response) => {
  const body = req.body
  if (body.name === undefined || body.name.length === 0) {
    return res.status(400).json({error: 'name missing'})
  }

  const person = new Person({
    name: body.name,
  })

  const savedPerson = await person.save()
  res.status(201).json(savedPerson)
}

const removePerson = (req: Request, res: Response) => {
  const id = req.params.id
  if (id === undefined) {
    return res.status(400).json({error: 'id missing'})
  }

  Person.findByIdAndRemove(id).then(() => {
    res.status(204).end()
  })
}

module.exports = {
  getPersons,
  addPerson,
  removePerson,
}
