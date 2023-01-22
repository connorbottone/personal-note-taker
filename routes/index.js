let router = require("express").Router();
let dataBase = require("../db/db.json");
const fs = require('fs');

const { v4: uuidv4 } = require('uuid');
const { response } = require("express");
//Route for a GET request to '/notes' endpoint.
router.get('/notes', (req, res) => {
    console.log('route get req registered')
    res.json(dataBase);
});
//Route for a POST request to the '/notes' endpoint.
router.post('/notes', (req, res) => {
    console.log(req.body)
    //adding a unique id 
    req.body.id = uuidv4()
    dataBase.push(req.body)
    fs.writeFile('db/db.json', JSON.stringify(dataBase), err => {
        if (err) throw err

    })
    res.json(dataBase)
});
router.delete('/notes/:id', (req,res) => {
    console.log('deleted')
    const { id } = req.params
    let db = dataBase.filter(note => note.id != id)
    fs.writeFile('db/db.json', JSON.stringify(db), err => {
        if (err) throw err

    })
    res.json(db)
    dataBase = db
})
module.exports = router