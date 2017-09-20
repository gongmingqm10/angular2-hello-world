import {Component, OnInit} from '@angular/core';
import {Article} from './article/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Android', 'https://android.com', 10),
      new Article('GraphQL', 'https://graphql.com')
    ];
  }

  ngOnInit(): void {
    console.log('App init successful');
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value));
    return false;
  }


}
