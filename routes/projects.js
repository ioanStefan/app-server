var express = require('express');
var router = express.Router();

var authHelper = require('../helpers/auth');

var projectsController = require('../controllers/projects');

/* Create a new project */
router.post('/create', authHelper.ensureAuth, projectsController.createProject);

module.exports = router;