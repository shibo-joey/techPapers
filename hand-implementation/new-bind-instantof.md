# ✨ Handwritten JavaScript Utilities

This document includes custom implementations of core JavaScript features: `new`, `bind`, and `instanceof`.

---

## ✅ `myNew` — Custom `new` Operator

```js
function myNew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype);
  const result = Constructor.apply(obj, args);
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
