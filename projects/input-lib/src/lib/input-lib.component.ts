import { Component, forwardRef, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input-lib.component.html',
  styleUrls: ['./input-lib.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputLibComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputLibComponent),
      multi: true,
    },
  ],
})
export class InputLibComponent
  implements OnInit, ControlValueAccessor, Validator
{
  formControl = new FormControl();

  public onTouched: () => void = () => {};

  constructor() {}

  ngOnInit(): void {}

  writeValue(obj: any): void {
    if (obj) {
      this.formControl.setValue(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.formControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("AreaSearchComponent validate", c, !this.areaForm.invalid);
    return !this.formControl.invalid
      ? null
      : { invalidForm: { valid: false, message: 'invalid' } };
  }
}
