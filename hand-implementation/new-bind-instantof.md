# ✨ Handwritten JavaScript Utilities

This document includes custom implementations of core JavaScript features: `new`, `bind`, and `instanceof`.

---

## ✅ `myNew` — Custom `new` Operator

```js
function myNew(Constructor, ...args) {
  // 1. 创建一个新对象，原型指向构造函数的 prototype
  const obj = Object.create(Constructor.prototype);
  // 2. 执行构造函数，绑定 this 到新对象上
  const result = Constructor.apply(obj, args);
  // 3. 如果构造函数返回的是对象类型，就返回它；否则返回新对象
  return (typeof result === 'object' && result !== null) ? result : obj;
}
```

### Example:

```js
function Person(name) {
  this.name = name;
}
const p = myNew(Person, 'Alice');
console.log(p.name); // Alice
console.log(p instanceof Person); // true
```

---

## ✅ `myBind` — Custom `bind` Method

```js
function myBind(fn, context, ...boundArgs) {
  // Return a new function that will call 'fn' with the given context
  return function (...args) {
    // Combine bound arguments with the new arguments and apply them
    return fn.apply(context, [...boundArgs, ...args]);
  };
}
```

### Example:

```js
function greet(greeting, name) {
  return `${greeting}, ${name}`;
}
const sayHiToTom = myBind(greet, null, 'Hi', 'Tom');
console.log(sayHiToTom()); // Hi, Tom
```

---

## ✅ `myInstanceof` — Custom `instanceof` Operator

```js
  if (typeof obj !== 'object' || obj === null) return false;

  // Get the prototype of the object
  let proto = Object.getPrototypeOf(obj);
  const prototype = Constructor.prototype;

  // Traverse the prototype chain
  while (proto) {
    // If the constructor's prototype is found in the chain, return true
    if (proto === prototype) return true;

    // Move up the prototype chain
    proto = Object.getPrototypeOf(proto);
  }

  // If no match found, return false
  return false;
}
```

### Example:

```js
console.log(myInstanceof([], Array)); // true
console.log(myInstanceof({}, Array)); // false
```

---

## 📌 More To Add?

Consider adding:

- `myCall`
- `myApply`
- `Object.create` polyfill

---
