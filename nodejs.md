# Node from beginning

## Module

- How to export functions through module:
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
 
 - How to load a module through other files:
 app.js
 
 ```javascript
  const run = require('./run.js')
  
 1. //call the function
  run.callRun()
  
 2. 
  //Or we can only call the single function
  run()
 ```
 
 - Default module api we can use:
  https://nodejs.org/en/docs/
 
    
    
    
    
