# Event Emitter

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  // 订阅事件
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  // 订阅一次，触发后移除
  once(event, listener) {
    const onceWrapper = (...args) => {
      listener(...args);
      this.off(event, onceWrapper);
    };
    this.on(event, onceWrapper);
  }

  // 取消订阅
  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
  }

  // 触发事件
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => listener(...args));
  }
}


// Example usage:
const emitter = new EventEmitter();

const greet = name => console.log(`Hello, ${name}!`);
emitter.on('greet', greet);

emitter.emit('greet', 'Shibo'); // Output: Hello, Shibo!
emitter.off('greet', greet);
emitter.emit('greet', 'Shibo'); // No output
```
