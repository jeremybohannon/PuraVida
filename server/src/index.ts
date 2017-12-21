import * as express from 'express'
import * as path from 'path'
import * as request from 'request'
import UnsplashService from './UnsplashService'

const app = express()
const port = 3000

const unsplashService = new UnsplashService()

app.use(function(req, res, next) {
  res.set("Access-Control-Allow-Origin", "*")
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.set('Cache-Control', "no-store")
  next()
})

app.get('/', (req, res) => {
  console.log('Default route')
  request("https://images.unsplash.com/photo-1504394468902-ea647eda589c?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=90cece78b6c9b67bff1a42d1ec4c81a8").pipe(res)
})

app.get('/image', (req, res) => {
  let query = JSON.stringify(req.query.query)
  let data = query != null ? unsplashService.getPhotosByQuery(query) : unsplashService.getPhotos()

  data.then(data => {
    console.log("URL: " + data.urls.full)
    request(data.urls.full).pipe(res)
  }).catch(err => {
    console.log("[index | /image] Error: " + err)
  })
})

app.listen(port, () => console.log(`Listening on port: ${port}`))