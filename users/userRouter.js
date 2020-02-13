const express = require('express');

const users = require('./userDb');

const router = express.Router();

// post new user
router.post('/', (req, res) => {
  const name = req.body;
  // console.log(name);
  // console.log(req.body);
  users.insert(name)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Server error adding a new user', error })
    })
});

// Post a new post for a given user
router.post('/:id/posts', (req, res) => {
  // do your magic!
});

// get users
router.get('/', (req, res) => {
  users.get() 
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Server error getting users', error });
    })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // validates the user id on every request that expects a user id parameter
  // if id is valid, store that user object as req.user
  // if id does not match any user id in the db, respond with 400 and { message: "invalid user id" } 
  next(); 
}

function validateUser(req, res, next) {
  // validates the body on a request to create a new user
  // if body is missing, respond with 400 and { message: "missing user data" }
  // if body is missing name field, respond with 400 and { message: "missing required name field" }
  next();
}

function validatePost(req, res, next) {
  // validates body on a request to create a new post
  // if body is missing, respond with 400 and { message: "missing post data" }
  // if body is missing the text field, respond with 400 and { message: "missing required text field" }
  next();
}

module.exports = router;
