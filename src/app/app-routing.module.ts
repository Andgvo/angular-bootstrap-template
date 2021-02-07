import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule) },
  { path: 'app', loadChildren: () => import('./modules/template/template.module').then(m => m.TemplateModule) },
  /*{
    path: 'home', component: DashboardComponent,
    children: [
      { path: 'template', loadChildren: () => import('./modules/template/template.module').then(m => m.TemplateModule) },
    ]
  },*/
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //useHash: true,
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
