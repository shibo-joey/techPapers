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
 
 - app.get()
 app.get('/endpoint',(req,res) => {
 
 })
 
 app.post()
 app.put()
 app.delete()
 ```
 
- Auto update for the server tool:
  nodemon
  
  ## Environment variavles
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log("I am listening"))
  
  
