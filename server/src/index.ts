import express = require('express')
import path = require('path')

const app = express()
const port = 3000


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.json('Pura Vida'))

app.get('/image', (req, res) => {
  res.sendFile(path.resolve('src/image.jpeg'))
})

app.listen(port, () => console.log(`Listening on port: ${port}`))