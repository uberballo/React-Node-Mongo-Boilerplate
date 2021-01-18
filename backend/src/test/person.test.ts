const should = require('chai').should()
const mongoose = require('mongoose')
const Person = require('../models/person')
import config from '../utils/config'

describe('person', function () {
  const MONGO_DB_URI = config.MONGO_URI

  const clearDB = (done: () => void) => {
    for (var collection in mongoose.connection.collections) {
      mongoose.connection.collections[collection].remove(function () {})
    }
    return done()
  }

  before(function () {
    if (mongoose.connection.readyState === 1) {
      mongoose.disconnect()
    }
    return mongoose.connect(MONGO_DB_URI)
  })

  beforeEach(function (done) {
    clearDB(function () {
      done()
    })
  })

  after(function (done) {
    mongoose.disconnect()
    return done()
  })

  describe('Person', function () {
    it('should save Person to database', async function () {
      const name = 'michael'
      const newPerson = new Person({
        name: name,
      })

      const savedPerson = await newPerson.save()
      should.exist(await Person.findById(savedPerson.id))
      console.log(savedPerson)
    })
  })
})
