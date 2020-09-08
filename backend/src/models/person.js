const mongoose = require('mongoose')
const config = require('../utils/config')

const url = config.MONGO_URL

console.log('connecting to', url)
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = new mongoose.Schema({
    name: String
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)