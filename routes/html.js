const htmlRoute = require('express').Router();
const path = require('node:path'); 

//GET NOTES to return notes.html
//NODE:PATH returns a path string
htmlRoute.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    console.log("htmlRoute GET notes.html");
});


//GET * return index.html
//NODE:PATH returns a path string
// htmlRoute.get("*", (req,res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//     console.log("htmlRoute GET index.html");
// });

module.exports = htmlRoute;