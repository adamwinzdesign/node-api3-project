const express = require('express');
// const morgan = require('morgan');
const helmet = require('helmet');

const userRouter = require('./users/userRouter');

const server = express();


server.use(helmet());
// server.use(morgan('dev'))
// server.use(morgan('[:date[web]] :method :url :status :response-time ms'));
// server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const date = new Date();
  console.log(`${req.method} Request to ${req.originalUrl} on ${date.toDateString()}`);

  next();
}

server.use(express.json());
server.use('/api/users/', userRouter);

module.exports = server;
