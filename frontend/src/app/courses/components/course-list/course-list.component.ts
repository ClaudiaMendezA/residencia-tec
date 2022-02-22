import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];

  constructor(
    private _httpClient: HttpClient,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this._httpClient.get(`courses`).subscribe((courses: any[]) => {
      this.courses = courses;
    })
  }

}
