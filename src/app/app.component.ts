import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log('App init successful');
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`title = ${title.value}, link = ${link.value}`);
    return false;
  }
}
