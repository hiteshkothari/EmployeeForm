import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeList;

  constructor(private route: Router) {
    this.employeeList = JSON.parse(localStorage.getItem('LOCAL_EmployeeList') || "[]");

  }

  ngOnInit(): void {
  }
  add() {
    this.route.navigate(['/'])

  }

}
