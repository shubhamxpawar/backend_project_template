# MERN Stack Backend Project Template 🚀

This project is a template of a basic MERN (MongoDB, Express, React, Node.js) stack application. It provides a foundation for building web applications with a structured backend using Node.js and Express, a database connection with MongoDB using Mongoose, and a standardized API response structure. It also includes basic error handling and configuration setup.

## 🌟 Key Features

- **Express Server Setup:** Configures an Express server with middleware for JSON parsing, URL encoding, static files, and CORS.
- **MongoDB Integration:** Establishes a connection to a MongoDB database using Mongoose.
- **Environment Variable Configuration:** Loads environment variables from a `.env` file using `dotenv`.
- **API Response Standardization:** Provides a reusable `ApiResponse` class for consistent API responses.
- **Custom Error Handling:** Defines a custom `ApiError` class for representing API errors with additional information.
- **Basic Route Handling:** Includes a basic route handler for the root path ("/").
- **Constants Management:** Includes a dedicated file for managing application-wide constants.

## 🛠️ Tech Stack

| Category    | Technology          | Description                                                                 |
|-------------|----------------------|-----------------------------------------------------------------------------|
| **Backend** | Node.js             | JavaScript runtime environment for server-side development.                 |
|             | Express.js          | Web application framework for Node.js.                                      |
| **Database**| MongoDB             | NoSQL database.                                                             |
|             | Mongoose            | MongoDB object modeling tool designed to work in an asynchronous environment. |
| **Utilities**| dotenv              | Loads environment variables from a `.env` file.                              |
|             | cors                | Middleware for enabling Cross-Origin Resource Sharing (CORS).               |

## 📦 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB installed and running (or a MongoDB Atlas account)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

3.  Create a `.env` file in the root directory and configure the following environment variables:

    ```
    PORT=8000
    MONGO_URI=<your-mongodb-connection-string>
    CORS_ORIGIN=http://localhost:5173
    ```

    Replace `<your-mongodb-connection-string>` with your MongoDB connection string.

### Running Locally

1.  Start the server:

    ```bash
    npm run start # or yarn start
    ```

2.  The server will start listening on the port specified in the `.env` file (default: 8000). You should see a message in the console indicating that the server is running and connected to the database.

## 💻 Project Structure

```
📂 project-root
├── src/
│   ├── db/
│   │   └── database.js       # MongoDB connection logic
│   ├── utils/
│   │   ├── api-error.js      # Custom API error class
│   │   ├── api-response.js   # Reusable API response class
│   │   └── constants.js      # Application-wide constants
│   ├── app.js              # Express application configuration
│   └── index.js            # Main entry point of the application
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation (this file)
```

## 📸 Screenshots

(Screenshots will be added here in future updates)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📝 License

This project is licensed under the MIT License.

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at <shubhamxpawar27@gmail.com>.

