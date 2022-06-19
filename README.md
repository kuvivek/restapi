# restapi

The REST API Endpoints created in this project is as follows.

|  Sl.No | API Endpoint                  |  Request Method | Description                     |  
|--------|-------------------------------|-----------------|---------------------------------|
|  1     | /api/v1/employees             |   GET           | Get all employees list          |
|  2     | /api/v1/employees/<employeeid>|   GET           | Get employee with Employee ID   |
|  3     | /api/v1/employees             |   POST          | Create a new employee           |
|  4     | /api/v1/employees/<employeeid>|   PATCH         | Update Employee partially       |
|  5     | /api/v1/employees/<employeeid>|   PUT           | Update Employee Completely      |
|  6     | /api/v1/employees/<employeeid>|   DELETE        | Delete Employee by Employee ID  |

# Steps Followed:

1. Create a folder structure within a src folder, which constitutes the controller and routes folder.
   The controller subfolder comprises of backend codes which interacts with the database.
   The routes subfolder comprises of middleware code which interacts with controller code and also expose its interface using `module.export` value. It is being invoked by the application source code here `index.js`, using `app.use()`

2. Testing whether the middleware code under route and application works with the dummy backend codes.
   Run the server code using following command and accessing the server using chrome browser with the following URL: http://localhost:8000/api/v1/employees

    ```
    MacBook-Pro:restapi vivek$ node index
    Express Server is running on the port 8000
    Get all the employees list
    ```

3. 