//imports
const express = require('express');
const fs = require("fs");
const app = express();
const apiImport = require("./routes/api");
const htmlImport = require("./routes/html");

//Get port from environment or default to 3001
let port = process.env.PORT || 8080;

//Using middleware for data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Using middleware to 
app.use('/api', apiImport);
app.use('/', htmlImport);

//Using middleware to point to public routes.
app.use(express.static('public'));


//port listener
app.listen(port, () => {
    console.log(`App listening on PORT ${port}`);
});

module.exports = app;