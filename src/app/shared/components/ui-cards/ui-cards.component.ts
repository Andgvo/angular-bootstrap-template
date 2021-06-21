import { Component, OnInit, Input } from '@angular/core';
import { cardAnimation } from '@shared/animations/router.animations';
import { NavigationLink } from '@models/template/NavigationLink';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-cards',
  templateUrl: './ui-cards.component.html',
  styleUrls: ['./ui-cards.component.scss'],
  animations: [ cardAnimation() ]
})
export class CardsComponent implements OnInit {

  @Input() cards: NavigationLink[];
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoSeccion(url: string, disabled?: boolean | false){
    if(!disabled)
      this.router.navigate([url]);
  }

  trackById(index, item) {
    return item.id;
  }

}
