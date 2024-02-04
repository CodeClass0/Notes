const apiRoute = require('express').Router();
const fs = require ('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);
const { v4: uuidv4 } = require('uuid');
let old = [];


//GET NOTES from db.json
apiRoute.get('/notes', (req, res) => {
    readFromFile("db/db.json").then((data) => {
        console.log("apiRoute GET receiving data from db.json");
        res.json(JSON.parse(data));
    });
});


//POST NOTES to db.json
apiRoute.post("/notes", (req,res) => {
    //Get old data as array of objects
    readFromFile("db/db.json").then((data) => {
        console.log(JSON.parse(data));
        console.log(req.body);
        const prev = JSON.parse(data);
        prev.push(req.body);
        console.log(prev);

        // //Write new array of objects to db
        writeToFile("db/db.json", JSON.stringify(prev));
        
        // //respond with the newly updated data
        res.json(prev);
    });

});





module.exports = apiRoute;