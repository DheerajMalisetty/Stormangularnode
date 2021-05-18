const express = require('express')
const bodyParser =require('body-parser')
const http = require('http');
let request = require('request');
let parseString = require('xml2js').parseString;
const cors = require('cors');
const PORT = 3000
const api = require('./routes/api')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/api', api)

app.get('/', function(req, res){
  res.send('hello from server')
})

app.listen(PORT, function (){
  console.log('server running on localhost:' + PORT)
})

app.post('/login', ((req, res) =>{
  var username = req.body.username;
  var password = req.body.password;
}))
