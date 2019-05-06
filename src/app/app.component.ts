import { Component } from '@angular/core';
import {Post} from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Posts';

  constructor() {
  }
   posts: Post[] = [
    new Post('Mon premier post', 'content1 '),
    new Post('Mon deuxiéme Post', 'content2'),
    new Post('Encore un post', 'content3')
  ];



}
