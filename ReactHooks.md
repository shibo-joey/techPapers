# React Hooks

  ## useState
  This is the most basic one and you can use array destructuring to get the state and setState function.
  ```javascript
  const [state, setState] = useState("dammy state")
  ```
  
  ## useEffect
  useEffect used when some logic effect the render proccess for example like http request. The function inside useEffect will be called after the **first** render and every render after the first one.
  
  Why we use useEffect for example if we want to send a get request to the server and update our state. It may becomes a infinite loop because update state will trigger re-render and http request will send and loop will start and never end.

  The reason why useEffect would work is because you can pass the second argument to determin when the function inside it will be called.

  When you pass an empty array to the second argument, it will acted like componentDidMount. It runs **only once after the first render.**
  
```javascript
useEffect(() =>{
    fetch("url)
          .then(
          setState()
          )
},[])
```
 
  
  
