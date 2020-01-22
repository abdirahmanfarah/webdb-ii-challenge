const express = require('express');
const carRouter = require('../car/carRouter.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send( "Server up and running!")
})

server.use('/api/cars', carRouter);

module.exports = server;