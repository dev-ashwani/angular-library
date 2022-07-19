import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input-lib.component.html',
  styleUrls: ['./input-lib.component.css'],
})
export class InputLibComponent implements OnInit, ControlValueAccessor {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      input: new FormControl(),
    });
  }

  ngOnInit(): void {}

  writeValue(obj: any): void {
    console.log(obj);

    this.form.setValue({
      input: obj,
    });
  }

  registerOnChange(fn: any): void {
    // throw new Error('Method not implemented.');

    console.log(fn);
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
}
