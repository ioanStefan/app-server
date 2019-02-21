# app-server
A simple API that demonstrate how endpoints can be created in NodeJS.

API will respont at to type of users:  reqular user and admin user.

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

As a design pattern the MVC format was applied. For each route a controller file and a model file was created.
For the client application was used VueJS framework and the application can be found here: https://github.com/ioanStefan/app-client .

As database was choose a JSON file wich can be found in app_db directory. The file contains two arrays, users and projects, where
registered users and created projects are stored.

For access limitation a helper was created, auth.js, in helpers directory wich limit the access on application based on the requirements.
