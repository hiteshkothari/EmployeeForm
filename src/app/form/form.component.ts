import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  roles = [
    { value: 'Admin', option: 'Admin' },
    { value: 'Manager', option: 'Manager' },
    { value: 'HR', option: 'HR' },
    { value: 'Software Engineer', option: 'Software Engineer' },
  ]
  constructor(private route: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['', Validators.required],
      phone: this.fb.group({
        countrycode: ['', Validators.required],
        number: ['', Validators.required]
      }),
      gender: ['', Validators.required]
    });


  }
  ngOnInit(): void { }

  submit() {

    console.log(this.form.value)
    console.log(this.form.errors)
    console.log("this.form.valid", this.form.valid)
    console.log("this.form.errors", this.form.errors)
    if (this.form.valid) {


      let employeeList = JSON.parse(localStorage.getItem("LOCAL_EmployeeList") || "[]");
      // console.log('employeeList', employeeList);
      employeeList.push(this.form.value);

      localStorage.setItem("LOCAL_EmployeeList", JSON.stringify(employeeList));
      console.log('Submit Form');
      this.route.navigate(['EmployeeDetails']);
    }
  }
  reset() {
    this.form.reset();
    console.log('reset Form');
  }
}
