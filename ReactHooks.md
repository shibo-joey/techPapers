# React Hooks

Those are most basic react hooks and the most easy example so that you can understand the idea fast.

### useState
### useEffect
### useCallback
### useRef
### useReducer
### useContext
### useMemo
### useLayoutEffect



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
  - This is used for reference of fields. First you can create a ref, and then refer to a field or component you wanna it to. Then for example we can use a botton to get the inputRef.
  
   ```jsx
   const inputRef = useRef()
   
   return(
   <input ref={inputRef} name="" value=""/>
   
   <Button onClick = {
          () => {concole.log(inputRef.current)}}>
          get the ref
   </Button>
   )

   ```
   Then you can get the console result:
   ```bash
   <input name="" value="">
   ```
   ## useReducer
   - The situation when we use useReducer is pretty like what we use redux
   ```jsx
  import React, { useReducer} from "react";

  function reducer(state, action) {
    switch (action.type) {
      case "increase":
        return  state + 1
      case "decrease":
        return state - 1
      default:
        return state;
    }
  }

  const App = () => {
    const [number,dispatch] = useReducer(reducer, 0)
    return (
      <div>
        <div>number :{number}</div>
        <button onClick={() => dispatch({type: "increase"})}> increase button </button>
        <button onClick={() => dispatch({type: "decrease"})}> decrease button </button>
     </div>
    );
  };

  export default App;
   ```
   - Basicly the reducer is listening to different types to dispatch. When you click the button, the state is going to change base on the action type.
   
   ## useContext
   - The most common usage of useContext is to create context and share the context to its child components.
   ```jsx
 import React, { useState, useMemo, createContext } from "react";
   
   const value = useMemo(() => (state, setState), [state, setState]);
   
   return
        <createContext.Provider value={value}>
          <Route path="/..."  component={...} />
          <Route path="/..."  component={...} />
        </createContext.Provider>
   
   ```
   
   - Then you can use the content in your child components:
   ```jsx
   import {createContext} from 'react'
   export const { user } = useContext(createContext);

   ```
   ## useMemo
   
   - The situation was most frequently used is when the component was rerendered because of changing of the state. functions inside the component was recreate or called again but actually the ouput of the function had never changed. In this situation, we need to use useMemo.
   
   -The caution is when recreating the function, we may need to use useCallback to the function or abstract the function outside the components.
   
   ### Put it outside the compoennt
   ```jsx
    function mulnipulate (something){
      return something
    }
    
    const App = () => {
      const something_else = useMemo(() => mulnipulate(something),[something])
      
      return <p>{something}</p>
    }
  ```
   
   ### Use useCallback

   ```jsx
    import {useCallback, useMemo} from 'react'
    const App = () => {
    
      const mulnipulate = useCallback((something) => {
          return something
        },[])
        
        const something_else = useMemo(() => mulnipulate(something),[something])
      
    }
   ```
   ## useLayoutEffect 
   
   - You can use it to find the bottom, height, left, right, top, width.... for the DOMRect of the Ref.
   ```jsx
   
   useLayoutEffect(() => {
      console.log(inputRef.current.getBoundingClientRect())
     },[])
     
   const inputRef = useRef()
   
   return(
   <input ref={inputRef} name="" value=""/>
   
   <Button onClick = {
          () => {concole.log(inputRef.current)}}>
          get the ref
   </Button>
   )
   ```
   
