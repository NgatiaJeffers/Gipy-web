import { Component, OnInit } from '@angular/core';
import { GiphyService } from './../giphy.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  gifs: any [] = []; 


  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
        this.giphyService.getTrendingGifs().subscribe((response: any)=> {
      this.gifs = response.data;
      console.log(this.gifs)
    }, (err) => 
    console.log('Oops!', err),
    () => console.log('Response', this.gifs)
    )
  }

  private offset = 0;
  private perPage = 12;
  public results: any;
  public isLoading = false; 

  getTrendingGifs() {
    this.giphyService.getTrendingGifs().subscribe((response: any)=> {
      this.gifs = response.data;
      console.log(this.gifs)
      this.isLoading = false; 
    }, (err) => 
    console.log('Oops!', err),
    () => console.log('Response', this.gifs)
    )
  }

  getMore() {
    this.isLoading = true;
    this.offset = this.offset + this.perPage;
    this.getTrendingGifs();
  }

}
