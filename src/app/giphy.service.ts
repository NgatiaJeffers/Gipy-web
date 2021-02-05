import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GifClass } from './gifs-class/gif-class';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  gif: GifClass;

  constructor(private http: HttpClient) { }

  getTrendingGifs() {
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=isAU1pJKQuJ1jUZNf8gqvDHSIFb0ZZjq&limit=25&rating=pg-13')
  }

  searchGifs() {
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=isAU1pJKQuJ1jUZNf8gqvDHSIFb0ZZjq&limit=25&rating=pg-13')
  }
}
