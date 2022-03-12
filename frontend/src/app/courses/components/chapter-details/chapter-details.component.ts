import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';
import { map, pluck } from 'rxjs';
import { CourseChapter } from '../../models/course.model';

@Component({
  selector: 'app-chapter-details',
  templateUrl: './chapter-details.component.html',
  styleUrls: ['./chapter-details.component.scss']
})
export class ChapterDetailsComponent implements OnInit {
  courseId: string;
  chapter: CourseChapter;

  constructor(private route: ActivatedRoute, private _httpClient: HttpClient, private markdownService: MarkdownService) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    const chapterId = this.route.snapshot.paramMap.get('chapterId');
    this.getChapter(chapterId);
    this.displayYoutubeVideo();
  }

  getChapter(chapterId: string) {
    // @ts-ignore
    this._httpClient
      .get(`course-chapters/${chapterId}`)
      .pipe(
        pluck('data'),
        map((chapter: any) => {
          const attributes = chapter.attributes;
          return { ...attributes, id: chapter.id };
        })
      )
      .subscribe(chapter => this.chapter = chapter);
  }

  displayYoutubeVideo() {
    this.markdownService.renderer.link = (text: string) => {
      console.log('text', text);
      return text.replace(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/g, (match, p1) => {
        console.log('executed yt', text, p1);
        return `<div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${p1}?rel=0" allowfullscreen></iframe>
                </div>`;
      });
    }
  }
}
