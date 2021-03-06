## Welcome to Cats_Fur_Ever!

To run the login the server must be started.  Inside cats-app run "node server.js"

## Journal of Progress/Lessons Learned

As of May 18, 2021, the login component is a learning tool for using tokens in a web app.  It is not
a true authorized login.  The Login/token credentials can be seen using Dev tools in Chrome under Application in Session Storage.

June 16: Major security issue with the API key being exposed.  Though it is located in the .env file and git ignored it is exposed in the browser developer tools.  Currently with the app is solely located in the frontend which means everything is exposed.  Solution:  Have it stored in a express backend so that it is not stored in the front end at all.  

Websites about how to secure API keys:
https://www.freecodecamp.org/news/how-to-securely-store-api-keys-4ff3ea19ebda/

The file layout of the app is also confusing.  Make a mistake in the inital set up of the app by creating a git repo and then running create-react-app afterwards inside that repo.  Solution: Next time when setting up a project, do the inital setup outside of git and then push it all onto git from the command line.

Of note:  Ran the update for VS Code last night.  Currently Prettier (code formatter) no longer works.  Keeping an eye out for an update.

There is an error 400 if i try to favorite the same picture twice.  Need to account for this in the code later.

Sept. 24, 2021:
How to start the app when you've been away:
navigate to cat-app and start it up using "npm start"
in a new tab navigate to cat-app and run "node server.js" this starts the backend express server so the login can be fetched.

## Dependencies
React bootstrap is used to build the Navigation bar.
npm install react-bootstrap-validation --save

## Form.js made following this tutorial:
https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react

## CAT API 
Documentation for Authentication: https://docs.thecatapi.com/authentication  

##  Get user input values in React 16+ Tutorial
https://flaviocopes.com/react-how-to-get-value-input/

## 404 vs 405 error code article
https://airbrake.io/blog/http-errors/405-method-not-allowed

## Restful API in React
https://pusher.com/tutorials/consume-restful-api-react
Uses the newer way of setting State.
Use setState to hold the data from the Api response then map over it in react ejs

## useState in React
https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/
this uses the older React version of how to setState.

## Articles that are flawed/didn't work quite right
https://medium.com/swlh/responsive-navbar-using-react-bootstrap-5e0e0bd33bd6  
-the end product of this article does not work.  Not sure if it is due to the author not providing 
-the css pages necessary for the responsive design to kick in or due to the React JS not being
-up to date with the current React programming. 

## Import Downloaded font
-This article is for React Native but the start is good for Reat for web i think.  I had to copy and paste the font file from the Font book into the App from the mac Applicaton folder.
-After copy and pasting in index.css added font-family to be able to use the font in the navbar.css file.
https://blog.bam.tech/developer-news/add-a-custom-font-to-your-react-native-app

## How to keep API keys secret
https://www.freecodecamp.org/news/how-to-securely-store-api-keys-4ff3ea19ebda/

###############################################################

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
