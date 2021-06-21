import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components view examples */
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewButtonsComponent } from './view/view-buttons/view-buttons.component';
import { DynamicFormComponent } from './view/dynamic-form/dynamic-form.component';
import { MessagesComponent } from './view/messages/messages.component';
import { CustomThemeComponent } from './view/custom-theme/custom-theme.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path:'view-custom-theme' , component: CustomThemeComponent },
  { path:'view-buttons' , component: ViewButtonsComponent },
  { path:'dynamic-form' , component: DynamicFormComponent },
  { path:'view-messages' , component: MessagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
