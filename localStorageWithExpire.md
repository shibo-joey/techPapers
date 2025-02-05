 # LocalStorage with expiration
 
```javascript
const LocalStorageWithExpiry = {
  setItem:(key, value, ttl) => {
    const expires = Date.now() + ttl
    localStorage.setItem(key, JSON.stringify({
      expires,
      value
    }))
  },
  getItem: (key) => {
    const item = localStorage.getItem(key)
    if(!item) return null
    const expiration = JSON.parse(item).expires
    
    if(Date.now() > expiration){
      localStorage.removeItem(key)
      return null
    }
    return JSON.parse(item).value
  },
  deleteItem:(key)=>{
    localStorage.removeItem(key)
  },
  clear:()=>{
    localStorage.clear()
  }
}

// Usage Example:
LocalStorageWithExpiry.setItem("userSession", { token: "abc123" }, 3600000); // 
const session = LocalStorageWithExpiry.getItem("userSession"); 
console.log(session);
LocalStorageWithExpiry.deleteItem("userSession"); // Remove specific item
LocalStorageWithExpiry.clear(); // Clear all items
```
