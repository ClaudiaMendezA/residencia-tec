export interface Course {
  id: string;
  title: string;
  description: string;
  active: boolean;
  createdAt: Date;
  publishedAt: Date;
  course_chapters?: CourseChapter[];
}

export interface CourseChapter {
  id: string;
  title: string;
  content: string;
  seen?: boolean;
}