import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesSnackComponent } from './messages-snack.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MessagesSnackComponent],
  exports: [MessagesSnackComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule
  ],
})
export class MessagesSnackModule { }
