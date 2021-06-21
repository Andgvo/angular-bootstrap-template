import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFormComponent } from './ui-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UICheckboxGroup } from './ui-checkbox-group/ui-checkbox-group.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnlyNumberDirective } from './utils/only-number.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  declarations: [UiFormComponent, UICheckboxGroup, OnlyNumberDirective],
  exports: [UiFormComponent]
})
export class UIFormModule { }
