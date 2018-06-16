import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpListService, Post } from '../../../../services/emp-list.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  post: any;
  post_id: string;

  constructor(private _Emplist: EmpListService, private route: ActivatedRoute) { 
    this.post_id = this.route.snapshot.params['id'];
    console.log( "Page Id -> " + this.post_id);
  }

  ngOnInit() {
    this.getPostData();
  }
  getPostData() {
    this._Emplist.getSinglePostService(this.post_id).subscribe(
      data => { this.post = data},
      err => console.error(err),
      () => console.log('done loading Posts')
    );
  }
}
