import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  @Output() pageTypeChange = new EventEmitter<void>();

  exampleForm!: FormGroup;
  colourClass: string = 'bg-skyblue';

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.formBuilder.group({
      input1: [null, Validators.required],
      input2: [null, Validators.required],
      input3: [null, Validators.required],
      input4: [null, Validators.required],
    });
  }

  submitForm() {
    if (this.exampleForm.valid) {
      this.toastrService.success('Success!');
      setTimeout(() => {
        this.pageTypeChange.emit();
      }, 650);
    } else {
      this.toastrService.error('Error!');
    }
  }

  resetForm() {
    this.exampleForm.reset();
  }

  changeColourClass(colourClass: string) {
    this.colourClass = colourClass;
  }
}
