import { Component, OnInit } from '@angular/core';

import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  
  departments = ['IT Support', 'Web Design', 'Email Marketing', 'Containt Team', 'XML - DB'];

  model = new Employee(18, 'Addy', 'male', 'addy@test.com', 95457865,'email', new Date("17/05/2009"),
          this.departments[4], true, 'img-1.jpg');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
