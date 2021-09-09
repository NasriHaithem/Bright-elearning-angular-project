import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseCategory } from 'src/app/models/courseCategory/course-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryPath = "http://localhost:8081/categories/"
  constructor(private http: HttpClient) { }

  addCategory(category: CourseCategory) {
    return this.http.post<any>(this.categoryPath + "add", category);
  }
  getAllCategories() {
    return this.http.get<any>(this.categoryPath + "all");
  }
}
