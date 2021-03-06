import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from 'src/app/models/lesson/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private lessonPath = "http://localhost:8081/lessons/"
  constructor(private http: HttpClient) { }

  addLesson(lesson: Lesson) {
    return this.http.post<any>(this.lessonPath + "add", lesson);
  }

  getLessonById(id: Number) {
    return this.http.get<any>(this.lessonPath + id);
  }

  updateLesson(lesson: Lesson) {
    return this.http.put<any>(this.lessonPath + "update", lesson);
  }
}
