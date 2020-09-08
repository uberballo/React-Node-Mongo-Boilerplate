const {Router} = require('express')
const personController = require('../controllers/personController')

const router = Router()

router.get('/person', personController.getPersons)
router.post('/person', personController.addPerson)
router.delete('/person/:id', personController.removePerson)

module.exports = router
