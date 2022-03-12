import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { ChapterItemComponent } from './components/chapter-item/chapter-item.component';
import { ChapterDetailsComponent } from './components/chapter-details/chapter-details.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    CourseDetailsComponent,
    ChapterItemComponent,
    ChapterDetailsComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    })
  ]
})
export class CoursesModule { }
