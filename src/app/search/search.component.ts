import { Component, OnInit } from '@angular/core';
import { GiphyService } from './../giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  giphys: Array<any> = [];

  constructor(private giphyservice: GiphyService) { }

  ngOnInit(): void {
  }

  searchGifs(giphyName: string) {
    if(giphyName !== '') {
      this.giphyservice.searchGifs(giphyName).subscribe((response: any) => {
        this.giphys = response.data;
        console.log(this.giphys)
        // this.isLoading = false; 
      }, (err) => 
      console.log('Oops!', err),
      () => console.log('Response', this.giphys)
      )
    }
  }

}
