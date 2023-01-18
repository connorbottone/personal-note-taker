//requireing all necassary e xt
let router = require ("express").Router()
let dataBase = require ("../db/db.json")
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));