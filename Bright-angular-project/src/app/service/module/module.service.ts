import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Module } from 'src/app/models/module/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private modulePath = "http://localhost:8081/modules/"
  constructor(private http: HttpClient) { }

  addModule(module: Module) {
    return this.http.post<any>(this.modulePath + "add", module);
  }

}
