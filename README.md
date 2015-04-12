###Steps to run the application from local

1. run "npm install"
2. run "node server.js" 
3. open a browser with the following url : http://localhost:5000/. Login with a username. 
4. open few instances of browser and listen to the same port and login using different usernames.

### Steps to run the application from Heroku 
[For log-in of Heroku, please refer to Heroku page]


Application shows how to deploy a node application in Heroku environment

1. Should have a Procfile 

```
web: node server.js
```

2. The application should have a `server.js` file
3. The `package.json` file should have the following section:

```
{
  ...
  .....
  .......
  },
  "scripts": {
  "start": "node server.js"
   },
  "engines": {
    "node": "0.10.0",
    "npm": "1.3.x"
  }
  "repository": {
    "type": "git",
    "url": "https://github.com/AnirbanKundu/node-chat-app"
  }
}
```

```git push heroku master```
Heroku will fetch the latest code from the mentioned GITHUB repo and deploy the app in their server. 

###To launch app from Heroku
```heroku open```
To view a live version of the app, it can be found [here] (https://thawing-retreat-7908.herokuapp.com/)

