import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ BreadcrumbComponent ],
  exports: [ BreadcrumbComponent ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
})
export class BreadcrumbModule { }
