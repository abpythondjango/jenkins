// Import the Express module
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define the port the app will listen on
const PORT = process.env.PORT || 8000;

// Define a simple route for the root URL
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

