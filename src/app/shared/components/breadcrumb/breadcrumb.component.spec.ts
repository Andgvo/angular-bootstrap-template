import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbComponent ],
      imports: [ RouterModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
