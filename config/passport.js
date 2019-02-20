/**
 * @author Adrian Stefan
 * @version 1.0.0
 */

const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const userModel = require('../models/user');

/**
 * Function that authenticate user based on a Token.
 * @param {Object} passport 
 */
module.exports = function (passport) {
    //  Set options for token validation
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = 'secret_key';
    //  Validate token
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        //  If token is valid, get user data and set a session
        let user = userModel.findUser(jwt_payload.data.username);

        if (user) {
            return done(null, {
                name: user.firstName + ' ' + user.lastName,
                username: user.username,
                mail: user.email
            });
        } else {
            return done(null, false);
        }
    }));
}