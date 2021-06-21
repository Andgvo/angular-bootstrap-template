import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material modules */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  exports:[
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ]
})
export class AngularMaterialModule {}