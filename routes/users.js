var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users');

/* User login. */
router.get('/login', usersController.authenticate);

/* Register new user. */
router.post('/register', usersController.register);


/* Get user profile */
router.get('/profile', usersController.profile);
module.exports = router;