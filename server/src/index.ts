import * as express from 'express'
import * as path from 'path'
import * as request from 'request'
import UnsplashService from './UnsplashService'

const app = express()
const port = 3000

const unsplashService = new UnsplashService()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  request("https://images.unsplash.com/photo-1472584069410-35e46830b642?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=697f7bf8a07e06145dd144421758d590").pipe(res)
})

app.get('/image', (req, res) => {
  let data = unsplashService.getPhotos()
  data.then(data => {
    console.log("URL: " + data.urls.full)

    request(data.urls.full).pipe(res)
  })
})

app.listen(port, () => console.log(`Listening on port: ${port}`))