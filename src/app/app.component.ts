import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
  url = `https://jsonplaceholder.typicode.com/users/`;
  items = [];
  constructor(private http: HttpClient){
 
  }
  getData() {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
      
      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push(data[key]);
    });
  }
}
