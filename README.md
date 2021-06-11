# Welcome to PDMirror!
![Logo](https://github.com/patricknuttree/pdmirror/blob/main/PDMirror.png)

### PDMirror is a yelp inspired app that is designed to help communities and police departments have real and meaningful communication through a medium that removes some of the power dynamics that create limitations in their communications. The name and the purpose of the app all come from the same sociological theory of the sociological mirror. A person cannot determine the normalcy or deviancy of their actions through their own perspective alone. They must use the world as their mirror to determine where their action lands and from there grow.

---
### Index

[Technologies](#Technologies)

[Key Features](#Key-Features)

[Visit PDMirror](#Visit-PDMirror)

[Frontend Routes](https://github.com/patricknuttree/pdmirror/wiki/Frontend-Routes-WireFrames)

[Database Schema and API Routes](https://github.com/patricknuttree/pdmirror/wiki/Database-Schema-and-API-Routes)

[Details](#Details)

[Feature Spotlight](#Feature-Spotlight)

[Code Snippets](#Code-Snippets)

[PDMirror Future Roadmap](#PDMirror-Future-Roadmap)

[Technical Instructions for Project](#Technical-Instructions-for-Project)

[Pre-Project Planning](#Pre-Project-Planning)

[Developer](#Developer)

[Special Thanks](#Special-Thanks)

---
### Technologies

* Python
* Flask
* JavaScript
* React-Redux
* JSX
* CSS
* SQLAlchemy
* PostgreSQL
* Heroku
* VSCode
* Docker
* npm
* Figma
* Adobe Photoshop
* Adobe XD
* DrawSql
* notion

### Key Features
* Two ways for users to add to the conversational sphere of the PDMirror. Users can do this by writing a reflection (get, post) and or a comment (post, get, update and delete).
* Searchable police departments.

### Details
> "A knowledge of the forces that rule society, of the causes that have produced its upheavals and of society's resources for promoting healthy progress has become of vital concern to our civilization." - Wilhelm Dithley (Father of the sociology mirror theory)

PDMirror is a Full-stack project that is meant to attempt a rather difficult action. It is meant to stimulate conversation between what could be diametrically opposed groups. The idea for this app comes from the idea that there is a difference between problems and issues. Put simply problems spawn issues not the other way around. A person gets a cold and needs to cough. The cold is the problem the cough is the issue. As a society we often focus on the issue and not the problem. These problems get worse because they go on while the issue gets a band-aid. Law enforcement and communities have problems and issues that they have to deal with in tandem. This in itself can create a problem because there is an issue of power dynamics between the two groups which leads to a breakdown in communication. Neither side has enough trust in the other thus neither side can communicate with the other effectively. No communication is the problem and the lack of trust is the issue. The PDMirror's goal is to create a place where a dialogue or forum can exist that removes some of power dynamic struggle from the equation. Both sides need to feel safe in order to produce meaningful exchange. The PDMirror is meant to be that safe place. 

### Visit PDMirror
https://pdmirror.herokuapp.com/

### Feature Spotlight
* PDMirror has reflections that act like normal posts to a website that the user can both write and view, along with other users posts on a specific police departments profile. In addition to that users can then create, read, update and delete comments on those reflections. One challenge was handling the database requirements for storing that information and then retrieving it. There are three levels of identification tied to each comment. The are tied to a user, reflection and police department. 


### Code Snippets
![Code Snippets](react-app/public/readmecodesnip.png)
This is the get route for the comments for an individual reflection. 


### PDMirror Future Roadmap
* Introduce a map feature to the main page that works in tandem with the search feature to locate a police department.
* Introduce a delineation between users and police department representatives.
* Introduce a third deeper level of communication via a reaction comment ability so that users can react to comments.
* Introduce broader population of police departments via an API rather than seeded data. To increase site longevity and lowering update requirements. 

### Technical Instructions for Project
* Git Clone
* On local machine, run 'pipenv install' to install required dependencies.
* Create initial database user and database as stated in .env.example file.
* Enter your pip environment.
* Run flask migrate 
* Run flask upgrade
* Run flask seed all
* In terminal flask run to start backend.
* In a separate terminal cd into the react app file. 
* Run npm start to start the front end server. 
* This should start new page in your browser. localhost:port in browser.

### Pre-Project Planning
* Picked and researched a clone that would best accomplish the idea behind the project.
* Created model schema for database relations with DrawSQL
* Created a basic wire-frame using Figma.
* Looked for sites to supply data for product information.
* Determined goal deadlines for certain project milestones.

### Developer
* Patrick Nusbaum [Github](https://github.com/patricknuttree) [Linkedin](https://www.linkedin.com/in/patrick-nusbaum-mpa) 

### Special Thanks
* Oliva Bynes for being a excellent project supervisor.
* Brad Simpson for being going well above the call of duty as a cohort instructor.
* Redbull for providing me with much needed alertness when working late into the night trying to meet stretch deadlines I set for myself. 
