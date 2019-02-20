let fs = require('fs');

let projectModel = require('../models/project');

module.exports = {
    /**
     * A function that returns all projects from db
     * @param {Request} req 
     * @param {Response} res 
     */
    getProjects(req, res) {
        let projects = projectModel.findAll();

        if (projects) {
            return res.json({
                success: true,
                projects
            });
        } else {
            return res.json({
                success: false,
                msg: "An error occurred!"
            });
        }
    },
    /**
     * Create a new project
     * @param {Request} req 
     * @param {Response} res 
     */
    createProject(req, res) {
        let {
            username,
            name,
            mail
        } = req.user;

        if (username != "admin") {
            // Normal user can't create a new project
            return res.json({
                success: false,
                msg: "You don't have access!"
            });
        }

        // Admin user can create a new project
        projectModel.saveProject(req.body.project, (success) => {
            if (success)
                return res.json({
                    success: true,
                    msg: 'Project was created!'
                })
            else
                return res.json({
                    success: false,
                    msg: 'Failed, project already exists!'
                })
        })
    }
}