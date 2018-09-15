import {Component} from '@angular/core'
import { AuthorsServices } from './authors.service';
@Component({
    selector:'author',
    template:`
    <h1>{{authors.length}} Authors</h1>
    <ul>
    <li *ngFor="let author of authors">{{author}}</li>
    </ul>
    `
})
export class AuthorsComponent{
    authors;
    
constructor(authors:AuthorsServices){
    this.authors=authors.getAuthors();

}
}