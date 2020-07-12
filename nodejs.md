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
 ```
 
 get the data
 ```javascript
 - app.get()
 app.get('/endpoint', (req,res) => {
  res.send("Hi")
 })
 ```
 
 add the data
 ```javascript
 - app.post()
  app.post('/endpoint', (req,res) => {
    cosnt newPost = {
       id: postx
       name: postName
    }
    data.push(newPost);
    res.send(course)
 })
 ```
 
  update the data
  ```javascript
 - app.put('/endpoint/:id', (req,res) => {
 
   //if id not existing, return 404
    const result = data.find(c => c.id ===  parseInt(req.params.id))
    if(!result) {
    res.status(404).send("The data with the id was not found")
    return
    }
    
   //validate
   const schema ={
        name: Joi.string().min(3).require()
      }
      const result = Joi.validate(req.body, schema);
   if (result.error){
      res.status(400).send(result.error)
      return
    }
    
  //update course
    data.name = req.body.name
    res.send(data)
   })
 
 ```
 
   delete data
 ```javascript
 - app.delete('/endpoint/:id', (req,res) => {
    //if id not existing, return 404
    const result = data.find(c => c.id ===  parseInt(req.params.id))
    if(!result) return res.status(404).send("The data with the id was not found")
    
   
    
  //delete course
    const index = data.indexOf(result)
    data.splice(index, 1)
    res.send(result)
   })
 ```
 
- Auto update for the server tool:
  nodemon
  
## Environment variavles
  
  ```javascript
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log("I am listening"))
  ```
  
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
  
  - Joi
  ```javascript
  const Joi = require("joi")
  
  //define a schema
  app.post('/endpoint', (req,res) => {
    const schema ={
      name: Joi.string().min(3).require()
    }
    const result = Joi.validate(req.body, schema);

    if (result.error){
      res.status(400).send(result.error)
      return
    }
   }
  
  ```
  - If we have a lot of request using Jio, I suggest create a function model for joi
  
  ```javascript
  function validation(data){
    const schema ={
      name: Joi.string().min(3).require()
    }
    return Joi.validate(data, schema);
  }
  
  //And you can use this validation in other request
    const result = validation(req.body)
    
  ```
  
  ## middleware function
  
  - We can create a middleware function in other file and use that function in middleware
  
  server.js
  ```javascript
  function server(req,res,next){
    console.log("loadind)
    next()
  }
  
  module.exports = server
  ```
  
  - Use in middleware app.js
  
   ```javascript
  const server = require("./sercer.js")
  
  app.use(server)
  ```
  - other middleware function:
  https://expressjs.com/en/resources/middleware.html
  
  
  ## managing configuration
  
  - npm rc
  - npm config
  
  default.json:
  
  ```json
  {
  "..."
  }
  ```
  
   ## debugging
   
   - debug package:
   npm i debug
   
  implement in environment viarable
  
  export/set DEBUG=app:startup
  ```jsvascript
  const debug = require('debug')('app:startup')
  
  debug("This works")
  ```
  ## structuring
  
  In other file, you can use route to seperate the router process
  
  server.js
  ```javascript
  const express = require('express')
  const server = express.Router()
  
  server.get('/')
  // The api key is set in index.js. The location here is relative
  module.exports = server
  ```
  
  In the index.js you can use the router
  
    ```javascript
  const server = require('./server.js')
  
  app.use('API ROUTE', server)
  ```
