import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpListService } from '../../../services/emp-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts;
  constructor(private _EmpListService: EmpListService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._EmpListService.getPostService().subscribe(
      data => { this.posts = data},
      err => console.error(err),
      () => console.log('done loading Posts')
    );
  }

}
