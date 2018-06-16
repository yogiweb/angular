import { Component, OnInit } from '@angular/core';
import { EmpListService } from '../../../services/emp-list.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {
  public posts;

  constructor(private _Emplist: EmpListService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._Emplist.getPostService().subscribe(
      data => { this.posts = data},
      err => console.error(err),
      () => console.log('done loading Posts')
    );
}

}