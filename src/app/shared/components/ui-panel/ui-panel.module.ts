import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIPanelOptionsComponent } from './ui-panel-options/ui-panel-options.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [ UIPanelOptionsComponent ],
  exports: [ UIPanelOptionsComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatCheckboxModule,
  ],
})
export class UIPanelModule { }
