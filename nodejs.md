# Node from beginning

## Module

- How to export a function through module:
run.js
```javascript
  function run(){
    console.log("I am running")
    }
    
  module.exports.callRun = run
 ```
 
 - How to load a module through other files:
 app.js
 
 ```javascript
  const run = require('./run.js')
  
  //call the function
  run.callRun()
 ```
 
    
    
    
    
