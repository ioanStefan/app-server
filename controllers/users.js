var fs = require('fs');
var bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

let userModel = require('../models/user');
module.exports = {
    /**
     * Authenticate an user
     * @param {Request} req 
     * @param {Response} res 
     */
    authenticate(req, res) {
        let {
            username,
            password
        } = req.body;

        //  Get user from db
        let user = userModel.findUser(username);

        if (user) {
            // User exists
            // Compare passwords
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;

                if (isMatch) {
                    const _user = {
                        name: user.firstName + ' ' + user.lastName,
                        username: user.username,
                        mail: user.email
                    }

                    const token = jwt.sign({
                        data: _user
                    }, 'secret_key', {
                        expiresIn: '8H'
                    });

                    return res.json({
                        success: true,
                        token: 'JWT ' + token,
                        name: user.firstName + ' ' + user.lastName
                    })
                } else {
                    // Password incorrect
                    return res.json({
                        success: false,
                        msg: 'Username or password incorrect!'
                    })
                }
            })
        } else {
            // Username incorrect
            return res.json({
                success: false,
                msg: 'Username or password incorrect!'
            })
        }
    },
    /**
     * Register a new user
     * @param {Request} req 
     * @param {Response} res 
     */
    register(req, res) {
        let user = req.body.user;

        userModel.saveUser(user, (success) => {
            if (success)
                return res.json({
                    success: true,
                    msg: 'User was added!'
                })
            else
                return res.json({
                    success: false,
                    msg: 'Failed, user already exists!'
                })
        })
    },
    /**
     * Get profile data for an user
     * @param {Request} req 
     * @param {Response} res 
     */
    profile(req, res) {
        let user = req.user;
        if (user) {
            let _user = userModel.findUser(user.username);
            return res.json({
                success: true,
                profile: {
                    firstName: _user.firstName,
                    lastName: _user.lastName,
                    email: _user.email,
                    username: _user.username
                }
            })
        } else {
            return res.json({
                success: false,
                msg: "You don't have access!"
            })
        }
    }
}