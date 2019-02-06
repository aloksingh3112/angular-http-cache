import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { startWith} from 'rxjs/operators';

const CACHE_KEY= 'posts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts;


  constructor(public httpClient:HttpClient){
    const path: string ='https://jsonplaceholder.typicode.com/posts';
    this.posts=this.httpClient.get<any>(path);

    this.posts.subscribe(
      next=>{localStorage[CACHE_KEY]=JSON.stringify(next)
      }
    )


  }

}
