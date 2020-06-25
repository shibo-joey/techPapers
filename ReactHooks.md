# React Hooks

  ## useState
  This is the most basic one and you can use array destructuring to get the state and setState function.
  ```javascript
  const [state, setState] = useState("dammy state")
  ```
  
  ## useEffect
 - useEffect used when some logic effect the render proccess for example like http request. The function inside useEffect will be called after the **first** render and every render after the first one.
  
 - Why we use useEffect for example if we want to send a get request to the server and update our state. It may becomes a infinite loop because update state will trigger re-render and http request will send and loop will start and never end.

 - The reason why useEffect would work is because you can pass the second argument to determin when the function inside it will be called.

 - When you pass an empty array to the second argument, it will acted like componentDidMount. It runs **only once after the first render.**
  
```javascript
useEffect(() =>{
    fetch("url)
          .then(
          setState()
          )
},[])
```
- if we want to the function called only when some state had changed, you can pass the second argument and the function inside will only been called when the second argument's state changed. 

```javascript
useEffect(() =>{
    fetch("url)
          .then(
          setState()
          )
},[state])
```

  ## useCallback
  
  - useCallback is a hook that will return a memorized version of the callback function that only changes if one of its dependencies has changed.
  
  - For example, if one of the button was clicked, the whole page was rendered and both fucntion will be craeted. but we need to prevent it. 
  
  
 ```jsx
 const increase = () => {
 setstate(c => c+1)
 }
 const decrease = () => {
 setstate(c => c+1)
 }
 
 return(
   <Botton onClick={increase}>
   <Botton onClick={decrease}>
   )
 ```
 
 - The way to prevent is to add usecall back to the functions.
  ```jsx
   const increase = useCallback(() => {
   setstate(c => c+1)
       },[increaseState])
       
   const increase = useCallback(() => {
   setstate(c => c+1)
       },[decreaseState])
   ```
   
  - Also, you can return something to clear the useEffect function
  ```javasccript
    useEffect(() => {
      const timer = setTimeout(() =>{}
        ,1000);
      return () => {clearTimeout(time)}
        },[])
  ```
   ## useRef
  - This is used for reference of fields. First you can create a ref, and then refer to a field you wanna it to. Then for example we can use a botton to get the inputRef.
  
   ```jsx
   const inputRef = useRef()
   
   return(
   <input ref={inputRef} name="" value=""/>
   
   <Button onClick = {
          () => {concole.log(inputRef)}}>
          get the ref
   </Button>
   )

   ```
   Then you can get the console result:
   ```bash
   <input name="" value="">
   ```
