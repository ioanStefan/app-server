var fs = require('fs');

module.exports = {
    /**
     * A funtion that return all projects
     */
    findAll() {
        let db = JSON.parse(fs.readFileSync('./app_db/database.json', 'utf8'));

        return db.projects;
    },
    /**
     * Return a project
     * @param {String} name 
     */
    findProject(name) {

        return false;
    },
    /**
     * 
     * @param {Object} project 
     * @param {Function} callback 
     */
    saveProject(project, callback) {

        let db = JSON.parse(fs.readFileSync('./app_db/database.json', 'utf8'));

        let projects = db.projects;

        for (let i = 0; i < projects.length; i++) {
            if (String(project.name).toLowerCase() == String(projects[i].name).toLowerCase()) {
                return callback(false);
            }
        }

        db.projects.push(project);
        fs.writeFile('./app_db/database.json', JSON.stringify(db), 'utf8', (err) => {
            console.log(err);
        });

        callback(true);
    }
}