let fs = require('fs');
let bcrypt = require('bcryptjs');
module.exports = {
    /**
     * Find an user
     * @param {String} username 
     */
    findUser(username) {
        // Read database
        let db = JSON.parse(fs.readFileSync('./app_db/database.json', 'utf8'));
        // Get users table
        let users = db.users;

        for (let i = 0; i < users.length; i++) {
            if (username == users[i].username) {
                return users[i];
            }
        }
    },
    /**
     * Save a new user in database
     * @param {Object} user 
     * @param {String} user.username
     * @param {String} user.password
     * @param {String} user.email
     * @param {String} user.firstName
     * @param {String} user.lastName
     */
    saveUser(user, callback) {
        let db = JSON.parse(fs.readFileSync('./app_db/database.json', 'utf8'));

        // Check if it's already present
        let users = db.users;

        for (let i = 0; i < users.length; i++) {
            if (user.username == users[i].username) {
                return callback(false);
            }
        }


        // Encrypt the password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) throw err;

                user.password = hash;
                // Save the new user
                db.users.push(user);

                fs.writeFile('./app_db/database.json', JSON.stringify(db), 'utf8', (err) => {
                    console.log(err);
                });

                callback(true);
            })
        })
    }
}