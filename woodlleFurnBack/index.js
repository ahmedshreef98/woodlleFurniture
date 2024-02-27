const express = require('express');
const { dbConnection } = require('./src/database/dbConnection');

const app = express();

app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Woodlle Backend');
});



dbConnection(); 

// Start the server
const PORT = process.env.PORT || 3000; // Use the environment port if available
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

