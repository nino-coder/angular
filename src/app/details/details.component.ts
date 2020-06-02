import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    let users = [];
    users.push(this.dataService.getData()) ;
    for(var i = 0; i < users[0][0].length; i++) {
      this.route.paramMap.subscribe(params => {
        this.user =  users[0][0][+params.get("id")-1]; 
        console.log(users[0][0].id)
      });
    }
    
    console.log(this.user)
  }
}
