import Unsplash, { toJson } from 'unsplash-js'
import * as unsplashKeys from '../config.js'

import 'whatwg-fetch'
import 'isomorphic-fetch'

export default class UnsplashService {
  private unsplash: Unsplash
  
  constructor(){
    this.unsplash = new Unsplash({
      applicationId: unsplashKeys.id,
      secret: unsplashKeys.secret,
      callbackUrl: unsplashKeys.callbackUrl
    });
  }

  public getPhotos(): Promise<any> {
    console.log('[UnsplashService]: Grabbing a photo...')
    return this.unsplash.photos.getRandomPhoto()
    .then(toJson)
    .then(json => {
      return json
    });
  }

  public getPhotosByQuery(_query: String): Promise<any> {
    console.log('[UnsplashService]: Grabbing a photo...')
    return this.unsplash.photos.getRandomPhoto({query: _query})
    .then(toJson)
    .then(json => {
      return json
    });
  }
}