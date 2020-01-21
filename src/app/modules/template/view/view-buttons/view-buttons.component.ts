import { Component } from '@angular/core';
import { BreadcrumbComponent } from '@breadcrumb/breadcrumb.component';
import { BC_BUTTONS } from "@shared/routing-list/ListLinks";

@Component({
  selector: 'app-view-buttons',
  templateUrl: './view-buttons.component.html',
  styleUrls: ['./view-buttons.component.scss']
})
export class ViewButtonsComponent {
  constructor(){
    BreadcrumbComponent.update( BC_BUTTONS );
  }
}