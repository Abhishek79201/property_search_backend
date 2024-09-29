# Property Search Application - Backend

This is the backend for a Property Search Application built with Node.js and Express. The application provides search operations for property estates.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [License](#license)

## Features

- User authentication using cookies
- CRUD operations for tasks
- Protected routes to ensure only authenticated users can access certain endpoints

## Technologies

- Node.js
- Express
- MongoDB (or preferred database)
- Mongoose (for MongoDB object modeling)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhishek79201/property_search_backend.git
   cd property_search_backend
   ```


2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   MONGODB_URI = mongodb+srv://abhishek:Abhi%40290@dotodo.newsp.mongodb.net/?retryWrites=true&w=majority&appName=dotodo
   PORT = 5002
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The server will be running at `http://localhost:5002`.

## API Endpoints

- **Estate Routes**
  - `GET /api/estates`: Retrieves all estates for the user based on filter.

## Database

Estate data is stored in a MongoDB database, with Estate associated with authenticated users. Ensure that you have a MongoDB instance running and the connection string properly configured in the `.env` file.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or suggestions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

### Notes:
- Replace `your-username` in the clone command with your actual GitHub username.
- Adjust the MongoDB connection string and other environment variables in the installation section as per your setup.
- You may want to add any specific commands or details relevant to your project in the README.
```
