const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/utils/db');
const todoRoutes = require('./src/routes/todoRoutes');

const app = express();
const port = 3000;
app.use(bodyParser.json());

// Connect to database
connectDB();

// Todo Routes handler
app.use('/todos', todoRoutes);

// Route not found handler
app.use((req, res, next) => {
    res.status(404).send('404 Page Not Found')
})

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})