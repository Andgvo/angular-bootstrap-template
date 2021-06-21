import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Routing */
import { TemplateRoutingModule } from './template-routing.module';
import { MaterialMessagesModule } from '../../shared/module-import/material-messages.module'

/* Components */
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewButtonsComponent } from './view/view-buttons/view-buttons.component';
import { DynamicFormComponent } from './view/dynamic-form/dynamic-form.component';
import { MessagesComponent } from './view/messages/messages.component';
import { CustomThemeComponent } from './view/custom-theme/custom-theme.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { CardsModule } from '@shared/components/ui-cards/ui-cards.module';
import { AngularMaterialModule } from '@shared/module-import/angular-material.module';
import { UIFormModule } from '@shared/components/ui-form/ui-form.module';
import { UIPanelModule } from '@shared/components/ui-panel/ui-panel.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ViewButtonsComponent,
    DynamicFormComponent,
    MessagesComponent,
    CustomThemeComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MaterialMessagesModule,
    MatCardModule,
    MatDialogModule,
    CardsModule,
    UIFormModule,
    UIPanelModule
  ]
})
export class TemplateModule { }
