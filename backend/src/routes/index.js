const {Router} = require('express')
const personController = require('../controllers/personController')

const router = Router()

router.get('/person',personController.getPersons)

module.exports = router