import Unsplash, { toJson } from 'unsplash-js'

import 'whatwg-fetch'
import 'isomorphic-fetch'

import * as unsplashKeys from '../config.js'

export default class UnsplashService {
  private unsplash = null
  
  constructor(){
    this.unsplash = new Unsplash({
      applicationId: unsplashKeys.id,
      secret: unsplashKeys.secret,
      callbackUrl: unsplashKeys.callbackUrl
    });
  }

  public getPhotos(): Promise<any> {
    return this.unsplash.photos.getRandomPhoto()
    .then(toJson)
    .then(json => {
      return json
    });
  }

}