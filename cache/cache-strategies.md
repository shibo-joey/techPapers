# Cache Strategies in JavaScript

This document explains common cache eviction strategies such as **LRU**, **LFU**, **FIFO**, and **Random Replacement**, along with their JavaScript implementations.

---

## 1. LRU (Least Recently Used)

**Eviction Strategy**: Removes the *least recently accessed* item when the cache is full.

**Use Case**: Useful when recently used items are likely to be reused soon.

```javascript
class LRUCache {
  constructor(limit) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size === this.limit) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}
```

---

## 2. LFU (Least Frequently Used)

**Eviction Strategy**: Removes the *least often accessed* item.

**Use Case**: Prioritizes frequently used items over recently used ones.

```javascript
class LFUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map(); // key -> { value, freq }
    this.freqMap = new Map(); // freq -> Set of keys
    this.minFreq = 0;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const entry = this.cache.get(key);
    this._updateFreq(key, entry);
    return entry.value;
  }

  put(key, value) {
    if (this.limit === 0) return;

    if (this.cache.has(key)) {
      const entry = this.cache.get(key);
      entry.value = value;
      this._updateFreq(key, entry);
    } else {
      if (this.cache.size === this.limit) {
        const keys = this.freqMap.get(this.minFreq);
        const lfuKey = keys.values().next().value;
        keys.delete(lfuKey);
        if (keys.size === 0) this.freqMap.delete(this.minFreq);
        this.cache.delete(lfuKey);
      }

      const newEntry = { value, freq: 1 };
      this.cache.set(key, newEntry);
      if (!this.freqMap.has(1)) this.freqMap.set(1, new Set());
      this.freqMap.get(1).add(key);
      this.minFreq = 1;
    }
  }

  _updateFreq(key, entry) {
    const oldFreq = entry.freq;
    const newFreq = ++entry.freq;

    this.freqMap.get(oldFreq).delete(key);
    if (this.freqMap.get(oldFreq).size === 0) {
      this.freqMap.delete(oldFreq);
      if (this.minFreq === oldFreq) this.minFreq++;
    }

    if (!this.freqMap.has(newFreq)) this.freqMap.set(newFreq, new Set());
    this.freqMap.get(newFreq).add(key);
  }
}
```

---

## 3. FIFO (First In First Out)

**Eviction Strategy**: Removes the *oldest added* item.

**Use Case**: Simple and efficient, but doesn't account for access patterns.

```javascript
class FIFOCache {
  constructor(limit) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key) {
    return this.cache.get(key) ?? -1;
  }

  put(key, value) {
    if (!this.cache.has(key) && this.cache.size === this.limit) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}
```

---

## 4. Random Replacement

**Eviction Strategy**: Removes a *random* item when the cache is full.

**Use Case**: Very simple, but unpredictable and not ideal for most scenarios.

```javascript
class RandomCache {
  constructor(limit) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key) {
    return this.cache.get(key) ?? -1;
  }

  put(key, value) {
    if (!this.cache.has(key) && this.cache.size === this.limit) {
      const keys = Array.from(this.cache.keys());
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      this.cache.delete(randomKey);
    }
    this.cache.set(key, value);
  }
}
```

---

## Summary Table

| Strategy | Eviction Rule                      | Strength                                 | Weakness                          |
|----------|------------------------------------|------------------------------------------|------------------------------------|
| **LRU**  | Remove least recently used item     | Good for temporal locality               | Can be misled by bursty usage     |
| **LFU**  | Remove least frequently used item   | Good for long-term popular items         | Expensive frequency tracking      |
| **FIFO** | Remove oldest inserted item         | Simple and fast                          | Ignores access patterns           |
| **Random** | Remove a random item              | Easiest to implement                     | Unpredictable performance         |
