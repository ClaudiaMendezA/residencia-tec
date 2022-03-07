import { Component, Input, OnInit } from '@angular/core';
import { CourseChapter } from '../../models/course.model';

@Component({
  selector: 'app-chapter-item',
  templateUrl: './chapter-item.component.html',
  styleUrls: ['./chapter-item.component.scss']
})
export class ChapterItemComponent implements OnInit {
  @Input() chapter: CourseChapter;

  constructor() { }

  ngOnInit(): void {
    console.log(this.chapter);
  }

}
