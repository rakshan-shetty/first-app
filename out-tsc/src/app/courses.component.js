var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(service) {
        this.title = 'list of courses';
        // let service=new CoursesService();
        this.courses = service.getCourses();
    }
    CoursesComponent = __decorate([
        Component({
            selector: 'courses',
            template: "<h2>{{title}}</h2>\n    <ul>\n    <li *ngFor=\"let course of courses\">{{course}}</li>\n    \n    </ul>\n    "
        }),
        __metadata("design:paramtypes", [CoursesService])
    ], CoursesComponent);
    return CoursesComponent;
}());
export { CoursesComponent };
//# sourceMappingURL=courses.component.js.map