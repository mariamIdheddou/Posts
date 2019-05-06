import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input()  post: Post ;

  constructor() { }


  ngOnInit() {
  }

  onlikeIt() {
this.post.loveIts++;
console.log(this.post.loveIts);
  }

  onDontLike() {
    if ( this.post.loveIts > 0) {
      this.post.loveIts--;
    }
  }
}
