const passport = require('passport');

module.exports = {
    /**
     * A function that ensure that user is authenticated
     * @param {Request} req 
     * @param {Response} res 
     * @param {Function} next 
     */
    ensureAuth(req, res, next) {
        passport.authenticate('jwt', {
            session: false
        }, (err, user, info) => {

            // console.log(user);
            req.user = user;

            return next();
        })(req, res, next);
    }
}