import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Article} from './Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('class') elementClass = 'row';
  @Input() article: Article;

  constructor() {
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }


}
