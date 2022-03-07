import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { ChapterItemComponent } from './components/chapter-item/chapter-item.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    CourseDetailsComponent,
    ChapterItemComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
