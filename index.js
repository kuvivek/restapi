const express = require('express');

// Create express app
const app = express();

// setup the server port
const port = process.env.PORT || 8000;

// define root route
app.get('/', (req,res) => {
  res.send('Hello World');
});

/* Making route available as mentioned in the README.md specification

// First import the routes, and then create an URL using the middleware
*/

const employeeRoutes = require('./src/routes/employeeRoute');

app.use('/api/v1/employees', employeeRoutes);
// Listen to the port
app.listen(port, ()=>{
  console.log(`Express Server is running on the port ${port}`);
});
