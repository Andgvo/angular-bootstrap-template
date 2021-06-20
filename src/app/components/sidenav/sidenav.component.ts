import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { linksPage, linksAdmin } from '@routing/ListLinks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;
  navigationLinks = linksAdmin; // linksAdmin; DEBUG //CAMBIAR A linksPage EN PRODUCCION
  isLoggedIn: boolean =  true; //true; DEBUG //CAMBIAR A false EN PRODUCCION
  
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
    private router: Router, private  ngZone:NgZone) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit() {
    
  }

  onLogout() {
    this.router.navigate(['']);
  }
  
}