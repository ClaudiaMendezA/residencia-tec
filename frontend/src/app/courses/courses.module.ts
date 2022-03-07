import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
