import { Component, OnInit } from '@angular/core';
import { GiphyService } from './../giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private offset = 0;
  private perPage = 12;
  public results: any;
  public query: string
  public gifs: Array<any> = [];
  public isLoading: boolean = true;

  constructor(private giphyservice: GiphyService) { }

  ngOnInit(): void {
  }

  searchGifs() {
    this.giphyservice.searchGifs().subscribe((data) => {
      this.results = data;
      this.gifs = this.gifs.concat(this.results.data);
      this.isLoading = false;
    },
    (err) => console.log('Oops!', err),
    () => console.log('Response', this.results)
    )
  }

  search(query) {
    this.query = query;
    this.isLoading = true;
    this.searchGifs();
  }

  getMore() {
    this.isLoading = true;
    this.offset = this.offset + this.perPage;
    this.searchGifs();
  }

}
