import mongoose, { Document } from 'mongoose'
const personSchema = new mongoose.Schema({
    name: String
})

personSchema.set('toJSON', {
    transform: (_document: Document, returnedObject: Document) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)