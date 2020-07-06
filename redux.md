# Three main components of redux
---

---
# Store

- hold the state of your application.


# Action

- Describe the change in the state of the application.

```javascript
function actionCreator(){
  return  {
      type: ACTION_NAME
  }
}
```

# Reducer

- Specify how the app's state changes in response to actions sent to store.

```javascript
// (previousState, action) => newState

const initialState = {
  numState: 0
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case ACTION_NAME: return{
      ...state,
      numState: state.numState + 1
    }
    default: return state
  }
}
```


# Principles
---

---
- The state of your whole application is stored in an object tree within a single store.
- The only way to change the state is to emit an action, an object describing what happened.
- To specify how the state tree is transformed by actions, you write pure reducers
