import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* MODULES */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

/* SERVICES */

/* COMPONENTS */
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BreadcrumbModule } from '@shared/components/breadcrumb/breadcrumb.module';
import { AngularMaterialTemplateModule } from '@shared/module-import/angular-material-template.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,      
    AppRoutingModule,
    BreadcrumbModule,
    AngularMaterialTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }