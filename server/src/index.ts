import * as express from 'express'
import * as path from 'path'
import * as request from 'request'
import UnsplashService from './UnsplashService'
import QuoteService from './QuoteService'

var favicon = require('serve-favicon')

const app = express()
const port = 3000

const unsplashService = new UnsplashService()
const quoteService = new QuoteService()

app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use(function(req, res, next) {
  res.set("Access-Control-Allow-Origin", "*")
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', (req, res) => {
  console.log('Default route')
  res.send('Routes: /image, /quote')
})

app.get('/image', (req, res) => {
  let query = JSON.stringify(req.query.query)
  let data = query != null ? unsplashService.getPhotosByQuery(query) : unsplashService.getPhotos()

  data.then(data => {
    console.log("URL: " + data.urls.full)
    request(data.urls.full)
      .on('response', res => {
        res.headers['cache-control'] = 'max-age=86400'
      })
      .pipe(res);
  }).catch(err => {
    console.log("[index | /image] Error: " + err)
    res.sendFile(path.resolve('src/public/images/offline.jpeg'))
  })
})

app.get('/quote', (req, res) => {
  let json = quoteService.getRandomQuote()
  res.set('Content-Type', 'application/json');
  res.json(json)
})

app.listen(port, () => console.log(`Listening on port: ${port}`))