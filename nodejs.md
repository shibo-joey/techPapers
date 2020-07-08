# Node from beginning

## Module

### How to export functions through module:
run.js
```javascript
  function run(){
    console.log("I am running")
    }
 1.   
  module.exports.callRun = run
  
 2. 
  //Or we can only export the single function
  module.exports = run
 ```
 
 ### How to load a module through other files:
 app.js
 
 ```javascript
  const run = require('./run.js')
  
 1. //call the function
  run.callRun()
  
 2. 
  //Or we can only call the single function
  run()
 ```
 
 ### Default module api we can use:
  https://nodejs.org/en/docs/
 
    
 ## Express
 
 Init:
 ```javascript
 const express = require('express')
 const app = express()
 
 app.use(express.json())
 
 - app.get()
 app.get('/endpoint', (req,res) => {
  res.send("Hi")
 })
 
 - app.post()
  app.post('/endpoint', (req,res) => {
    cosnt newPost = {
       id: postx
       name: postName
    }
    data.push(newPost);
    res.send(course)
 })
 
 app.put()
 app.delete()
 ```
 
- Auto update for the server tool:
  nodemon
  
  ## Environment variavles
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log("I am listening"))
  
  - To set a environment variable:
  1. win: set PORT=5000
  2. mac: export PORT=5000
  
  ## Dynamic routing parameters
  
   ```javascript
    app.get('/endpoint/:id',(req,res) => {
      res.send(req.params.id);
      // go to "/endpoint/1" you can see "1"
    })
   ```
   
  ## Input validation
  - we can use simple validation logic or use lib like joi
  
  ```javascript
  app.post('/endpoint', (req,res) => {
    if(!req.body.name || req.body.name.length < 3){
      res.status(400).send("Length is required to 3 charactor minimum")
      return
    }
  
    cosnt newPost = {
       id: postx
       name: postName
    }
    data.push(newPost);
    res.send(course)
    })
  ```
  
  
