import { Component } from '@angular/core';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { BC_BUTTONS } from "@shared/routing-list/ListLinks";

@Component({
  selector: 'app-view-buttons',
  templateUrl: './view-buttons.component.html',
  styleUrls: ['./view-buttons.component.scss']
})
export class ViewButtonsComponent {
  
  exampleBootstrapButton = '<button class="btn btn-success">Success</button>';
  exampleAngularButton = '<button mat-button color="primary">Primary</button>';

  constructor(){
    BreadcrumbComponent.update( BC_BUTTONS );
  }
}