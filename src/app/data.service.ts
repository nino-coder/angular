import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
   ) { 
    this.items.forEach(element => {
      console.log(element)
    });
   }
   url = `https://jsonplaceholder.typicode.com/users/`;
   items = [];
  getData() {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data[0]);
      this.items.push(data)
    console.log(this.items)
   
  })
  return this.items;
}
}