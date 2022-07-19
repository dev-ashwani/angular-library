import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputLibComponent } from './input-lib.component';

@NgModule({
  declarations: [InputLibComponent],
  imports: [ReactiveFormsModule],
  exports: [InputLibComponent],
})
export class InputLibModule {}
