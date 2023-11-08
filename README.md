---

# Employee Management API

This is a RESTful API for managing employee data. It allows you to register and search for employees based on their metadata and document types.

## Getting Started

These instructions will help you set up and run the solution.

### Prerequisites

- Node.js and npm installed.
- PostgreSQL installed and running.
- Git installed.
- Nest CLI (for development purposes).

### Installing Dependencies

1. Clone the repository:

```bash
git clone https://github.com/yourusername/employee-management-api.git
```

2. Change to the project directory:

```bash
cd employee-management-api
```

3. Install project dependencies:

```bash
npm install
```

### Configuring PostgreSQL

1. Create a PostgreSQL database for the application.

2. Update the database connection configuration in the `ormconfig.js` file to match your PostgreSQL settings.

### Running the Application

To run the application, execute the following command:

```bash
npm run start
```

The API will be available at `http://localhost:8080`.

### Registering an Employee

To register a new employee, send a POST request to `http://localhost:8080/employees` with the following JSON body:

```json
{
  "name": "John Doe",
  "birthDate": "1990-01-01",
  "cpf": "12345678901",
  "email": "johndoe@example.com",
  "phoneNumber": "+1234567890",
  "street": "123 Main St",
  "number": "42",
  "city": "Exampleville",
  "state": "EX"
}
```

### Searching for Employees

To search for employees, send a GET request to `http://localhost:8080/employees`.

### Accessing Employee Details

To access the details of a specific employee, send a GET request to `http://localhost:8080/employees/{employeeId}`.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Nest.js, PostgreSQL, and TypeORM for making this project possible.

---
