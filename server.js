const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(morgan('dev'))
server.use(logger)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} Request to ${req.originalUrl} `);

  next();
}

module.exports = server;
