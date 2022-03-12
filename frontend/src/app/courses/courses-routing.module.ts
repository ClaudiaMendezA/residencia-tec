import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChapterDetailsComponent } from './components/chapter-details/chapter-details.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseListComponent } from './components/course-list/course-list.component';

const routes: Routes = [
  {path: '', pathMatch : 'full', component: CourseListComponent},
  {path: ':id', component: CourseDetailsComponent},
  {path: ':id/chapter/:chapterId', component: ChapterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
