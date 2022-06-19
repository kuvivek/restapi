const express = require('express');

// Create express app
const app = express();

// setup the server port
const port = process.env.PORT || 8000;

// define root route
app.get('/', (req,res) => {
  res.send('Hello World');
});

// Listen to the port
app.listen(port, ()=>{
  console.log(`Express Server is running on the port ${port}`);
});
