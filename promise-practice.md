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
