# app-server
A simple API that demonstrate how endpoints can be created in NodeJS.

API will respond at to type of users:  reqular user and admin user.

# What a regular user can do:

· register (username, email, password, first name, last name)
· login (username, password)
· see details about his profile (username, email, first name, last name), just if he it's logged in, 
  and he must only be able to view HIS profile

 # What an admin can do:

· login (username, password)
· see all users available with (username, email, first name, last name)
· add a project (name, company name)

# What everyone can do:
    
·  see all the projects available inside the platform, without registration

# Structure
As a design pattern the MVC format was applied. For each route a controller file and a model file was created.
For the client application was used VueJS framework and the application can be found here: https://github.com/ioanStefan/app-client .
Applying this desing keeps the code structured and well organised .

As database was choose a JSON file wich can be found in app_db directory. The file contains two arrays, users and projects, where
registered users and created projects are stored. With JSON format is pretty easy to work in JS.

For access limitation a helper was created, auth.js, in helpers directory wich limit the access on application based on the requirements.

As Login verification was choose Passport.js with JWT technology. Easy to use and fast implementation. Generated token is stored on the client side in localStorage. At logout data stored in localStorage is deleted.

Default user:
- username *admin*
- password *system*
