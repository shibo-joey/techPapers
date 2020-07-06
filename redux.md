# Three main components of redux
---

---
# Store

- hold the state of your application.


# Action

- Describe the change in the state of the application.

```jsx
function actionCreator(){
  return  {
      type: ACTION_NAME
  }
}
```

# Reducer

- Ties the store and actions togather.




# Principles
---

---
- The state of your whole application is stored in an object tree within a single store.
- The only way to change the state is to emit an action, an object describing what happened.
- To specify how the state tree is transformed by actions, you write pure reducers
