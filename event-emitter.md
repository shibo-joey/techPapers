# Event Emitter

```javascript
class EventEmitter {
  constructor(){
    this.events = new Map()
  }

  on(event, listener){
    if(!this.events.has(event)){
      this.events.set(event, new Set())
    }
    this.events.get(event).add(listener)
  }

  off(event, listener){
    if(this.events.get(event)){
      this.events.get(event).delete(listener)
    }
  }

  emit(event, ...args){
    if(this.events.get(event)){
        this.events.get(event).forEach(listener => listener(...args))
    }
  }

  once(event, listener){
    if(!this.events.get(event)){
      this.events.set(event, new Set())
    }
    this.events.get(event).add(listener)
    this.off(event, listener)
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
