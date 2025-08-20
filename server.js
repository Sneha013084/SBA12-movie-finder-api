
require ('dotenv').config();
const express = require('express');
const app = express()
const movieRoutes = require('./routes/movieRoutes');

const PORT = 3001;

// mount movie routes under api

app.use('/api', movieRoutes)

app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
}) ;