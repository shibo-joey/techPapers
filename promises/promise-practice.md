# Throttle Promises
Throttling promises ensures that a set number of promises run concurrently while limiting the number of active executions at any given time. This is useful when dealing with API requests, database queries, or any async operations that should be rate-limited.


<!-- Inline Code Block -->
```javascript
async function throttlePromisesWithWorkers(tasks, limit){
  const result = []
  const excutionSet = new Set()

  for(let i = 0; i < tasks.length; i++){
    task = tasks[i]()
    const promise = task
      .then((value) => result[i] = value)
      .finally(() => excutionSet.delete(promise))
    excutionSet.add(promise)
    if(excutionSet.size >= limit){
      await Promise.race(excutionSet)
    }
  }
  await Promise.all(excutionSet)
  return result
}

const asyncTask = (id) => () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(`Task ${id} done`);
      resolve(id);
    }, Math.random() * 2000) // Randomized delay
  );

const tasks = [1, 2, 3, 4, 5, 6].map((id) => asyncTask(id));

throttlePromisesWithWorkers(tasks, 3).then((results) =>
  console.log("All Done:", results)
);
  ```


# Promise All

```javascript
function myPromiseAll(promises){
  if(!promises || !Array.isArray(promises)) reject()
  if(promises.length === 0) resolve([])
  return new Promise((resolve,reject) => {
    let result = []
    let count = 0
    
    promises.forEach((promise,index) => {
      Promise.resolve(promise)
        .then((value) => {
        result[index] = value
        count++
        if(count === promises.length){
          resolve(result)
        }
      })
        .catch(reject)
    })
  })
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

myPromiseAll([p1, p2, p3]).then(console.log).catch(console.error);
  ```
