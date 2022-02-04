import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUpoadComponent } from './file-upoad.component';

describe('FileUpoadComponent', () => {
  let component: FileUpoadComponent;
  let fixture: ComponentFixture<FileUpoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUpoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUpoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
