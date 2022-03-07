import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { environment } from 'src/environments/environment';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(
    private _httpClient: HttpClient,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this._httpClient.get(`courses`).pipe(pluck('data')).subscribe((courses: any[]) => {
      this.courses = courses.map(course => ({id: course.id, ...course.attributes}));
    })
  }

}
