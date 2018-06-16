import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { Person } from '../../models/personViewModel';


@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})

export class FormTestComponent implements OnInit {
  
  constructor() { }
  errCheck = false;
  errMsg = "";
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;


  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      //Validators.required,
      //Validators.pattern("/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      this.errCheck = false;
      console.log("Form Submitted!");
      this.myform.reset();
    } else {
      this.errCheck = true;
      this.errMsg = "Please fill required fields";
    }
  }

}
