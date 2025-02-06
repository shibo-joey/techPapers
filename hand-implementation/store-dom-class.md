# Create a store for DOM element


```javascript
class DOMElementStore {
  constructor() {
    this.store = new Map();
  }

  // Add a DOM element to the store with a unique key
  addElement(key, element) {
    if (!(element instanceof HTMLElement)) {
      throw new Error("Element must be an instance of HTMLElement");
    }
    this.store.set(key, element);
  }

  // Retrieve a stored DOM element by key
  getElement(key) {
    return this.store.get(key) || null;
  }

  // Remove an element from the store
  removeElement(key) {
    this.store.delete(key);
  }

  // Check if an element exists in the store
  hasElement(key) {
    return this.store.has(key);
  }

  // Get all stored elements
  getAllElements() {
    return Array.from(this.store.values());
  }

  // Clear all stored elements
  clearStore() {
    this.store.clear();
  }
}

// Example Usage
const elementStore = new DOMElementStore();

const div = document.createElement("div");
div.innerText = "Hello, Store!";

elementStore.addElement("myDiv", div);
console.log(elementStore.getElement("myDiv")); // Logs the div element
elementStore.removeElement("myDiv");
console.log(elementStore.getElement("myDiv")); // Logs null
```
