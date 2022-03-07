import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, pluck } from 'rxjs';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  course$: Observable<Course>;

  constructor(private route: ActivatedRoute, private _httpClient: HttpClient) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    this.getCourse(courseId);
  }

  getCourse(id: string) {
    // @ts-ignore
    this.course$ = this._httpClient
      .get(`courses/${id}?populate=course_chapters`)
      .pipe(
        pluck('data'),
        map((course: any) => {
          const attributes = course.attributes;
          const course_chapters = attributes.course_chapters?.data.map(
            (chapter) => ({ id: chapter.id, ...chapter.attributes })
          );
          return { ...course.attributes, id: course.id, course_chapters };
        })
      );
  }
}
