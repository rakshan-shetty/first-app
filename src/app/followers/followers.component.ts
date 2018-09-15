import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
followers=[
  {id:1,name:"name1",description:"behrf efhwefhef rfhbrfrefhberfer ferhfberfer fherf refhrf erf"},
  {id:2,name:"name2",description:"behrf efhwefhef rfhbrfrefhberfer ferhfberfer fherf refhrf erf"},
  {id:3,name:"name3",description:"behrf efhwefhef rfhbrfrefhberfer ferhfberfer fherf refhrf erf"},
];
  constructor(private navroute:Router,
    private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.queryParamMap
    .subscribe(qparams=>{
      console.log(qparams.get('page')+"--"+qparams.get("test"));
    })
  }
  navigateBtn(){
    this.navroute.navigate(["/"]);
  }
}
