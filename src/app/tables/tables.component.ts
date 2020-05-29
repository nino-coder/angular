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
  ngOnInit(): void {
    this.users = this.dataService.getData();
  }

}
