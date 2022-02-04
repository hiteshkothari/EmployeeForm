import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upoad',
  templateUrl: './file-upoad.component.html',
  styleUrls: ['./file-upoad.component.sass']
})
export class FileUpoadComponent implements OnInit {
  fileForm: FormGroup;
  fileContent: string = '';
  MetaData: string = '';
  constructor(private route: Router, private fb: FormBuilder) {
    this.fileForm = this.fb.group({
      file: ['']
    });
  }

  ngOnInit(): void {
  }

  goToForm() {
    this.route.navigate(['']);
  }
  readFile() {
    console.log(
      this.fileForm.controls['file'].value
    )
    // File  Contents 
    // debugger;

    // this.fileForm.controls['file'].value;
    if (this.fileForm.controls['file'].value != '') {
      this.readFileContent();
    }

  }

  async readFileContent() {
    const fileSelected: HTMLInputElement = document.getElementById("file") as HTMLInputElement;

    console.log(fileSelected.files?.length);
    if (fileSelected.files?.item) {

      console.log(fileSelected.files?.item(0));
      // File Meta Data
      this.MetaData = 'Name :' + fileSelected.files?.item(0)?.name || '';
      this.MetaData += ' Size :' + fileSelected.files?.item(0)?.size || '';
      this.MetaData += ' Type :' + fileSelected.files?.item(0)?.type || '';
      this.fileContent = ' Text :' + await fileSelected.files?.item(0)?.text() || '';

    }
  }

  reset() {
    this.fileForm.reset();
    this.MetaData = "";
    this.fileContent = "";
    console.log('reset Form');
  }
}
