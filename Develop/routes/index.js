let router = require ("express").Router()
let dataBase = require ("../db/db.json")
const fs = require('fs')

const { v4: uuidv4 } = require('uuid');
//setting up a route for a GET request to '/notes' endpoint.
router.get('/notes', (req, res) =>{
    console.log('route hit')
    res.json(dataBase);
});
