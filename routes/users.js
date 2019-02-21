var express = require('express');
var router = express.Router();

var authHelper = require('../helpers/auth');

var usersController = require('../controllers/users');

/* User login. */
router.post('/login', usersController.authenticate);

/* Register new user. */
router.post('/register', usersController.register);


/* Get user profile */
router.get('/profile', authHelper.ensureAuth, usersController.profile);
module.exports = router;