
# Priority of the Event Loop:

1. Call Stack: The stack is where JavaScript's synchronous code is executed. When a function is invoked, it gets pushed onto the stack. Once that function completes, it gets popped off the stack.

2. Callback Queue: This is the queue where asynchronous tasks, such as those triggered by setTimeout, I/O operations, etc., are pushed. These tasks are executed after the stack is cleared, but only if the microtask queue is empty.
  - setTimeout and setInterval
  - I/O operations (e.g., file read, network request)
  - Event listeners (e.g., click, keydown, etc.)
  - setImmediate (in Node.js)
  - requestAnimationFrame (in the browser)

3. Microtask Queue: This is where the promises (resolved promises, .then, .catch, etc.) are placed. The microtask queue has higher priority than the callback queue. All tasks in the microtask queue will be executed before the event loop processes any tasks from the callback queue, even if they were added later.
  - Promise callbacks (via .then(), .catch(), .finally())
  - MutationObserver callbacks (in the browser)
  - process.nextTick callbacks (in Node.js)

## Call Stack > Microtask Queue > Callback Queue

