const express = require('express');
const router = express.Router(); 

const employeeController = require('./../controllers/employees-controller');

router.route('/')
    .get(employeeController.getAllEmployees)
    .post(employeeController.insertEmployee)

router.route('/:id')
    .get(employeeController.getEmployeeByID)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee)


module.exports = router; 