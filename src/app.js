const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./dbs/mongo')
app.use('/', require('./routes'))

module.exports = app;