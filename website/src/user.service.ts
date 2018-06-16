import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private _http: Http) { }

  // getCategories() {
  //   return this._http.get('api/users.json')
  //     .map((response: Response) => response.json())
  //     .do(data => console.log('All; ' + JSON.stringify(data)))
  //     .catch(this.handleError);
  // }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}