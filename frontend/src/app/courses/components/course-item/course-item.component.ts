import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course;
  thumb: string;

  constructor() { }

  ngOnInit(): void {
    if (this.course) {
      this.thumb = `https://ui-avatars.com/api/?name=${this.course.title}&background=0D8ABC&color=fff&size=140`
    }
  }
}
