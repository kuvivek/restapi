// Import the Model
const EmployeeModel = require('../models/employeeModel');

// Get all the employee List from the database
exports.getEmployeeList = (req, res) =>{
  // console.log('Get all the employees list');
  // Now invoking the model function
  EmployeeModel.getAllEmployees((err, employees) => {
    console.log('We are here');
    if(err) res.send(err);
    // Fetch the employees and display at both console log as well as browser.
    console.log('Employees', employees);
    res.send(employees);
  });
};

exports.getEmployeeByID = (req, res) => {
  console.log('Get Employee by ID');
};