- Circular references
- `Symbol` properties
- Complex types like `Date`, `RegExp`, `Map`, `Set`
- Shared references (preserves object graph structure)

---

## ✅ The Function

```js
function deepClone(obj, hash = new WeakMap()) {
  // 基本类型或函数直接返回
  if (Object(obj) !== obj || obj instanceof Function) return obj;

  // 处理循环引用
  if (hash.has(obj)) return hash.get(obj);

  // 处理日期
  if (obj instanceof Date) return new Date(obj);

  // 处理正则
  if (obj instanceof RegExp) return new RegExp(obj);

  // 处理 Set
  if (obj instanceof Set) {
    const result = new Set();
    hash.set(obj, result);
    obj.forEach(value => result.add(deepClone(value, hash)));
    return result;
  }

  // 处理 Map
  if (obj instanceof Map) {
    const result = new Map();
    hash.set(obj, result);
    obj.forEach((value, key) => {
      result.set(deepClone(key, hash), deepClone(value, hash));
    });
    return result;
  }

  // 创建新对象或数组
  const result = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
  hash.set(obj, result);

  // 复制所有属性，包括 Symbol
  const keys = Reflect.ownKeys(obj);
  for (const key of keys) {
    result[key] = deepClone(obj[key], hash);
  }

  return result;
}

