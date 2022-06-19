const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

// Creating route for the employee List by creating a map between the path and the function call
router.get('/', employeeController.getEmployeeList);

// Now make this router available outside this file using module.exports.
module.exports = router;