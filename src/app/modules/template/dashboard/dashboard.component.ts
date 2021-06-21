import { Component, OnInit } from '@angular/core';
import { linksAdmin } from '@routing/ListLinks';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { BC_HOME } from '@routing/ListLinks';
import { cardAnimation } from '@shared/animations/router.animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ cardAnimation() ]
})

export class DashboardComponent implements OnInit {
  
  cards = linksAdmin.slice(1);

  constructor() {
    BreadcrumbComponent.update(BC_HOME);
  }

  ngOnInit() {
  }

  trackById(index, item) {
    return item.id;
  }
  
}
