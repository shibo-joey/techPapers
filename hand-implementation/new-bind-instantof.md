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
  return function (...args) {
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
function myInstanceof(obj, Constructor) {
  if (typeof obj !== 'object' || obj === null) return false;

  let proto = Object.getPrototypeOf(obj);
  const prototype = Constructor.prototype;

  while (proto) {
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
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
