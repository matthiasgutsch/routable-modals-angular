import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  elements: any = [];
  visible: boolean;

  getImages() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/')
      .subscribe((posts) => {
        this.elements = posts;
      });
    return ``;
  }

  showDialog() {
    this.visible = true;
  }
  ngOnInit() {
    this.getImages();
  }
}
