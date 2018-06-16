import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmpListService } from '../../services/emp-list.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  public posts;


employees_list: Employee[] = [
  {
    id: 1,
    name: "Aryan",
    gender: "Male",
    email: "aryan@test.com",
    phoneNMumber: 9876543210,
    contractPrefarence: "email",
    dateOfBirth: new Date('31/8/2000'),
    department: "Admin",
    IsActive: true,
    photoPath: "profile.jpg",
  },
  {
    id: 2,
    name: "Dev",
    gender: "Male",
    email: "dev@test.com",
    phoneNMumber: 45678458,
    contractPrefarence: "email",
    dateOfBirth: new Date('25/4/2007'),
    department: "BA",
    IsActive: true,
    photoPath: "profile.jpg",
  },
  {
    id: 3,
    name: "Addy",
    gender: "Male",
    email: "addy@test.com",
    phoneNMumber: 7788994455,
    contractPrefarence: "email",
    dateOfBirth: new Date('17/5/2005'),
    department: "People and culture",
    IsActive: true,
    photoPath: "profile.jpg",
  },
  {
    id: 4,
    name: "Lakshay",
    gender: "Male",
    email: "lakshay@test.com",
    phoneNMumber: 8888222224,
    contractPrefarence: "email",
    dateOfBirth: new Date('05/06/2013'),
    department: "Manager",
    IsActive: true,
    photoPath: "profile.jpg"
  }
];

  constructor(private _demoService: EmpListService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this._demoService.getPostService().subscribe(
      data => { this.posts = data},
      err => console.error(err),
      () => console.log('done loading Posts')
    );
  }


}
