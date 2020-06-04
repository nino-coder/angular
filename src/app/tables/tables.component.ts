import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }
  users;
  clicked=false;
  ngOnInit(): void {
    this.users = (this.dataService.getData());
    console.log(this.users[0])
  }
  
  onClick(){
    this.clicked = true;
  }
  remove(id){    
    for(var i = 0; i < this.users[0].length; i++) {
      if(this.users[0][i].id === id) {
        this.users[0].splice(i, 1);
    }
    }
    return this.users[0];
  }
}
