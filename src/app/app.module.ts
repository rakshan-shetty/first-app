import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import{RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsServices } from './authors.service';
import { AuthorsComponent } from './authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts-component/posts-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FollowersComponent } from './followers/followers.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCasePipe,
    InputFormatDirective,
    ZippyComponent,
    NewCourseFormComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    FollowersComponent,
    ProfileComponent,
    NotFoundComponent,
    PostComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
         component:HomeComponent
        },
      {
        path:'followers', 
        component:FollowersComponent
      },
      {
        path:'followers/:id/:name', 
        component:ProfileComponent
      },
      {
        path:'post', 
        component:PostComponent
      },
      {
        path:'**', 
        component:NotFoundComponent
      }

    ])
  ],
  providers: [CoursesService, AuthorsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
