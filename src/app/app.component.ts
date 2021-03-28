import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//implements para tipar os ciclos de vida (ngOnint, ngDestroier)
export class AppComponent {
  title = 'Hello World!';

  /*
  constructor(http: HttpClient) {
    console.log(http);
    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(
        photos => {
          console.log(photos); this.photos = photos
        });
  }
*/
}
