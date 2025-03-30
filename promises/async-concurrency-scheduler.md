# Async Concurrency-Controlled Scheduler (JavaScript)

This is a simple asynchronous scheduler in JavaScript that controls how many tasks run concurrently. Useful for rate-limiting or managing resource-heavy operations.

## ✅ Scheduler Implementation

```javascript
class Scheduler {
  constructor(maxConcurrency) {
    this.maxConcurrency = maxConcurrency; // Max number of concurrent tasks
    this.runningCount = 0; // Currently running tasks
    this.queue = []; // Task queue
  }

  add(task) {
    return new Promise((resolve, reject) => {
      const runTask = async () => {
        this.runningCount++;
        try {
          const result = await task();
          resolve(result);
        } catch (err) {
          reject(err);
        } finally {
          this.runningCount--;
          this._next(); // Try to run the next task
        }
      };

      if (this.runningCount < this.maxConcurrency) {
        runTask();
      } else {
        this.queue.push(runTask);
      }
    });
  }

  _next() {
    if (this.queue.length > 0 && this.runningCount < this.maxConcurrency) {
      const nextTask = this.queue.shift();
      nextTask();
    }
  }
}

//////////////////////////////////////////////////////////////////////////////
const scheduler = new Scheduler(2); // Allow 2 tasks at the same time

const timeoutTask = (time, name) => () => 
  new Promise(resolve => {
    console.log(`${name} start`);
    setTimeout(() => {
      console.log(`${name} done`);
      resolve(name);
    }, time);
  });

scheduler.add(timeoutTask(1000, 'task1'));
scheduler.add(timeoutTask(500, 'task2'));
scheduler.add(timeoutTask(300, 'task3'));
scheduler.add(timeoutTask(400, 'task4'));
```
