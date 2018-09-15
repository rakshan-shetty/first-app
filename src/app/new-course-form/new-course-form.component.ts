import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent  {

  categorys=[
    {id:1,category:"Development"},
    {id:2,category:"Art"},
    {id:3,category:"Languagrs"}

  ];
  submited(x){

    console.log(x);

  }
}
