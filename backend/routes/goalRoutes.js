const express = require ('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

router.route

router.get('/', getGoals)

router.post('/', setGoal)

router.put('/:id', updateGoal)

router.get('/:id', deleteGoal)

module.exports = router 

