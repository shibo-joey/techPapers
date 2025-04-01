# Deep Compare in JavaScript

This utility function performs a **deep comparison** between two JavaScript values. It supports primitive values, objects, arrays, functions, Dates, Maps, and Sets.

## 🧠 Function Code

```javascript
function deepEqual(a, b) {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (a instanceof Function && b instanceof Function) {
    return a.toString() === b.toString();
  }

  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;
    for (let [key, val] of a) {
      if (!b.has(key) || !deepEqual(val, b.get(key))) return false;
    }
    return true;
  }

  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) return false;
    for (let val of a) {
      if (!b.has(val)) return false;
    }
    return true;
  }

  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  
  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}
```

## ✅ Example Usage

```javascript
const obj1 = {
  name: 'Alice',
  dob: new Date('1995-06-15'),
  skills: ['JS', 'Node'],
  meta: new Map([['a', 1], ['b', 2]]),
  tags: new Set(['dev', 'coder']),
  greet: function () { return "Hello"; }
};

const obj2 = {
  name: 'Alice',
  dob: new Date('1995-06-15'),
  skills: ['JS', 'Node'],
  meta: new Map([['a', 1], ['b', 2]]),
  tags: new Set(['dev', 'coder']),
  greet: function () { return "Hello"; }
};

console.log(deepEqual(obj1, obj2)); // true
```

## ℹ️ Notes

- Supports primitives, objects, arrays, functions, Dates, Maps, and Sets.
- For functions, comparison is based on `toString()` (not runtime behavior).
