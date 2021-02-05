import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  gifs: Array<any> = [];

  constructor(private http: HttpClient) { }

  getTrendingGifs() {
    return this.http.get(`http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=12`)
  }

  searchGifs(giphyName: string) {
    // http://api.giphy.com/v1/stickers/search?q=cat&api_key=dc6zaTOxFJmzC
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${giphyName}&api_key=dc6zaTOxFJmzC&limit=12`)
  }
}
