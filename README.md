# Spinal Cord Injury Research Map Database

The Spinal Cord Injury Research Map Database (SCIRMD) is an application which allows users to discover research studies and other resources for people living with Spinal Cord Injuries and/or Traumatic Brain Injuries. Passive Users have the ability to register for authenticated accounts, upon registration, users are able to submit research projects and local resources of which they are aware. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

Software or Technology to install/obtain 
 - Postgres & Postico (used to manage the databases)
 - An IDE code viewer such as Visual Studio Code, Atom, Sublime, etc...
 - Obtain an Google Maps API key. Can be obtained by creating a Google Maps Platform account at the following link:

 https://cloud.google.com/maps-platform/?_ga=2.155566267.140811539.1534436762-799229381.1534436762#get-started


### Lay of the Land

* `src/` contains React Components.
* `public/` contains static client-side assets.
* `build/` after the project is built, contains the transpiled code from `src/` and `public/` which will be viewed on the production site.
* `server/` contains necessary Express App files.

### Installing

A step by step series of examples that tell you how to get a development environment running.

1. From GitHub, navigate to the main page of the repository. [Find Repository Here](https://github.com/srz1992/get-up-stand-up-project)
2. Under the repository name, click **Clone or download**.
3. In the Clone with HTTPs section, click the copy button to copy the clone URL for the repository.
4. Create a local directory or navigate to the local directory into which you wish to clone the project.
5. Open your Terminal, in the terminal navigate to the directory in which you created or an already existing directory from step 4.
6. In the terminal, type `git clone`, then paste the URL you'd copied in Step 2.
  * `$ git clone https://github.com/srz1992/get-up-stand-up-project`
7. Press **Enter**. Your local clone will be created in the directory from step 4.
8. In the Terminal, type 'npm install' and press **Enter**
9. Open the project in your IDE.
10. Locate the 'src' folder
11. **You will need your Google Maps API key for this step** :
In the 'src' folder create a new file called Key.js and copy and paste the following into the new Key.js file you just created:

  export const KEYS = {
    GOOGLE_API_KEY: 'put your Google Maps API key here'
  }

12. In your IDE, navigate to the '.gitignore' file and perform the following steps:
  a. on line 37, enter a "#" in front of "build/"
    ex: #build/
  b. on line 68, enter a "#" in front of "Key.js"
    ex: #Key.js



13. Download and Install [Postico](https://eggerapps.at/postico/)

14. In your terminal, type 'brew services start postgresql' and press **Enter**

15. Open Postico and create a new database named "gusu_project"

16. Reference and execute the queries provided in the `database.sql` file. This will create the database tables required.


###IMPORTANT###
Using Postico, CREATE THE FOLLOWING TABLES IN THE 'SQL Query' FILE IN THE FOLLOWING ORDER: 

1. users 
2. profile
3. resources
4. statuses
5. research_type
6. research_phase
7. locations
8. articles
9. quasi_articles


```
npm run server
```

Then press Cmd + t to open a new tab in Terminal

```
npm run client
```

Have fun!



## Development Setup Instructions

1. In your terminal, run `npm install`
2. Create a `.env` file at the root of the project and paste this line into the file:
   
    ```SERVER_SESSION_SECRET=superDuperSecret```
    

    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

3.  Api Key -- There is a Key.js file in the src folder that contains your API keys for google maps. Please add the file to your .gitignore.
4. Start postgres if not running already by using `brew services start postgresql`
5. Run `npm run server`
6. Run `npm run client`
7. Navigate to `localhost:3000`

## Deployment
### Heroku Prerequisite (one time)

1. Sign up for an account on [Heroku.com](https://www.heroku.com/)
2. Install Heroku CLI by typing `brew install heroku` in Terminal
3. Authenticate by typing `heroku login` in Terminal

  > Note: Your project also needs to have a git repository.

### Heroku Setup

Run the following commands from within your project folder.

1. In terminal, navigate to your project folder and type `heroku create`
2. Login in if prompted
3. Type `git remote -v` to ensure it added successfully

Make sure your PORT is configured correctly as:

```
JavaScript
var port = process.env.PORT || 5000;
```

Next, commit your changes and push them to Heroku:

```
git add .
git commit -m "MESSAGE"
git push heroku master
```

   > Note: You'll need to commit and push each time you make a change that you want to deploy to Heroku. **Keep in mind you CAN NOT pull from Heroku. This is not a replacement for GitHub!**

Lastly, open terminal and type `heroku open` as a shortcut to open your website in a browser.

   > Note: It is best to fully test your code locally before deploying to Heroku. Bugs are much harder to troubleshoot on a live website.

### Miscellaneous

- `heroku logs` - Display error logs
- `heroku config` - Show basic app info
- `heroku restart` - Sometimes it helps to turn things off an on again
- `heroku open` - Opens the website for you project in the browser

### Resources

More detailed instructions can be found here: 

- [https://devcenter.heroku.com/articles/git](https://devcenter.heroku.com/articles/git)



## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [React-Redux](https://redux.js.org) - React bindings for Redux.
* [Axios](https://github.com/axios/axios) - A Promise-based HTTP client for JavaScript.
* [Express](https://expressjs.com/) - Framework for Node.js.
* [PostgreSQL](https://www.postgresql.org/) - Open source object-relational database.
* [Node.js](https://nodejs.org/en/) - JavaScript runtime.
* [Nodemon](https://nodemon.io/) - Utility which monitors any changes to the source and automatically restarts your server.
* [Material-UI](https://material-ui.com) - React components implementing Google's Material Design.
* [Passport.js](www.passportjs.org) - Authentication middleware for Node.js.
* [Google Maps Platform](https://cloud.google.com/maps-platform/) - Build customized, agile experiences that bring the real world to your users with static and dynamic maps, Street View imagery, and 360° views.
* [Google Maps React](https://www.npmjs.com/package/google-maps-react) - Declarative Google Map React component.
* [React-Google-Autocomplete](https://www.npmjs.com/package/react-google-autocomplete) - Autocomplete functionality for Google Maps Platform.
* [Material-UI](https://material-ui.com) - React components implementing Google's Material Design.
* [SweetAlert2](https://sweetalert2.github.io/) - A beautiful, responsive, customizable, accessible replacement for JavaScript's popup boxes.
* [Recompose](https://github.com/acdlite/recompose) - A React utility belt for function components and higher-order components.



## Authors

* **Curtis Morice** - *Front-End & Middleware Development* - [Curtis Morice](https://github.com/CurtisMorice)
* **Johnny Packard** - *Front-End & UI Development* - [Johnny Packard](https://github.com/JohnnyPackard)
* **Lauren Smith** - *Server & Redux Back-End Development* - [Lauren Smith](https://github.com/smit4446)
* **Law Yang** - *Front-End & Middleware Development* - [Law Yang](https://github.com/LawYang)
* **Sean Zilka** - *Team Lead, SQL, Back-End Development* - [Sean Zilka](https://github.com/srz1992)


## Acknowledgments

* Rob Wudlick at Get Up Stand Up to Cure Paralysis Foundation for your wisdom, and inspiration throughout this project.
* Prime Digital Academy and all its staff.
* Mary Mosman for her continued guidance.
* The Menkar cohort for all their assistance.