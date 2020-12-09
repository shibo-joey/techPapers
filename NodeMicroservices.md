# Microservice


## Stratagies

- sync
  - Services communicate with each other using direct request


- async
  - Services communicate with each other using events


- Simple demo

```js
const express = require('express')

const app = express()

const posts= {}

app.get('/api/posts', (req,res) => {
  res.send(posts)
})

app.post('/api/posts', (req,res) => {
  const {title} = req.body
  posts[id] = {
  id:uuid
  title
  }
  
  res.status(201).send(posts[id])
})

app.listen(5000, () => {
console.log("Listening on 5000')
})

```
