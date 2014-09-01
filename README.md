###Steps to run the application from local

1. run "npm install"
2. run "node server.js" 
3. open a browser with the following url : http://localhost:3000/. Login with a username. 
4. open few instances of browser and listen to the same port and login using different usernames.

### Steps to run the application from Cloud Foundry 


Application shows how to deploy a node application in cloud foundry environment

1. Should have a .Procfile 

```
{
  web: ./node_modules/.bin/grunt server
}
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
}
```


You can learn more about the staticfile buildpack, including how to set up security at [here](http://chrisfrost.com/javascript/nodejs-on-cloudfoundry-new-buildpack/).

