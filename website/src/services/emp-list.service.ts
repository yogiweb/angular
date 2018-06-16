import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EmpListService {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getPostService();
  }

  getPostService() {
    return this.http.get('/');
  }
  getSinglePostService(id) {
    return this.http.get('/'+id);
  }

}

export class Post {
  constructor (
      public userId: number,
      public id: number,
      public title: string,
      public body: string
  ) {  }
}