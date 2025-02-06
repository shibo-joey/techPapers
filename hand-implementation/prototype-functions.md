# Array Flat

<!-- Inline Code Block -->
```javascript
const arr = [0, 1, [2, [3, [4, 5]]]]
Array.prototype.myFlat = function (depth = 1){
  const flatten = (arr, depth) => {
   return arr.reduce((acc, current)=>{
      if(Array.isArray(current) && depth > 0){
        acc.push(...flatten(current, depth -1 ))
      }else{
        acc.push(current)
      }
      return acc
    },[])
  }
  
  return flatten(this, depth)
}
console.log(arr.myFlat())
