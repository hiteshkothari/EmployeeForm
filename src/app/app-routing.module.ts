import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: "EmployeeDetails", component: EmployeeDetailsComponent },
  { path: '', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
