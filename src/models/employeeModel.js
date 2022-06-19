// Connect to database and then execute our query here.
// Import the database first.
var dbConn =  require('../../config/dbconfig');

// create an employee object
var Employee = (employee) => {
  this.first_name   = employee.first_name;
  this.last_name    = employee.last_name;
  this.email        = employee.email;
  this.phone        = employee.phone;
  this.organization = employee.organization;
  this.designation  = employee.designation;
  this.salary       = employee.salary;
  this.status       = employee.status ? employee.status: 1;
  this.created_at   = new Date();
  this.updated_at   = new Date();
};

// Define a function which returns a result with the list of all employees, This will be 
// invoked later on at the controller side.
Employee.getAllEmployees = (result) => {
  // Connect to db and execute a query, with a return of either an error or a response
  dbConn.query('SELECT * FROM employees', (err, res) => {
    if(err) {
      console.log('Error while fetching employees', err);
      result(null,err)
    } else {
    console.log('Employees fetched successfully');
    result(null, res);
    }
  });

};

// Export the Employee object which has the function getAllEmployees defined.
module.exports = Employee;
