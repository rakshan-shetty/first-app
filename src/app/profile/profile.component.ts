import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
id;
name;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
       this.id = params.get("id");
       this.name = params.get("name");
    })
  }

}
