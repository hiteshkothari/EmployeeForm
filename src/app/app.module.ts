import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormComponent } from './form/form.component';
import { FileUpoadComponent } from './file-upoad/file-upoad.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    FormComponent,
    FileUpoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
