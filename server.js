//imports
const express = require('express');
const fs = require("fs");
const app = express();
const apiImport = require("./Develop/routes/api");
const htmlImport = require("./Develop/routes/html");

//Get port from environment or default to 3001
const PORT = process.env.port || 3001;

//Using middleware for data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Using middleware to 
app.use('/api', apiImport);
app.use('/', htmlImport);

//Using middleware to point to public routes.
app.use(express.static('public'));


//port listener
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

module.exports = app;