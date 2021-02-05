import { Component, OnInit } from '@angular/core';
import { GiphyService } from './../giphy.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  public gif: string; 
  public result: any; 
  public isLoading: boolean = true;


  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
    this.getTrendingGifs();
  }

  private offset = 0;
  private perPage = 12;
  public results: any;
  public gifs: Array<any> = [];

  getTrendingGifs() {
    this.giphyService.getTrendingGifs().subscribe((data)=> {
      this.result = data;
      this.gifs = this.result.data.image_url;
      this.isLoading = false;
    }, (err) => 
    console.log('Oops!', err),
    () => console.log('Response', this.result)
    )
  }

  getMore() {
    this.isLoading = true;
    this.offset = this.offset + this.perPage;
    this.getTrendingGifs();
  }

}
