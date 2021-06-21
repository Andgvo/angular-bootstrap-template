import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UIPanelAttr } from '../models/ui-panel-attr';

@Component({
  selector: 'ui-panel-options',
  templateUrl: './ui-panel-options.component.html',
  styleUrls: ['./ui-panel-options.component.scss']
})
export class UIPanelOptionsComponent implements OnInit {

  @Input() title: string = '';
  @Input() mainAttr: string = '';
  @Input() attributes: UIPanelAttr[] = [];
  @Input() items: any[] = [];
  @Input() required: boolean = true;
  @Input() showCancel: boolean = true;
  @Input() submitLabel: string = 'labels.ok';
  @Input() cancelLabel: string = 'labels.cancel';
  @Output('onSubmit') onSubmitEvent = new EventEmitter<boolean>();
  @Output('onCancel') onCancelEvent = new EventEmitter<boolean>();

  invalid: boolean = false;
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  //////////////// UTILS /////////////////////////
  identify(index: number, item: UIPanelAttr) {
    return item.json;
  }

  validateLeastOneSelected(): void {
    this.invalid = !this.items.reduce((prevItem, currItem) => {      
      return prevItem && Object.values(currItem).filter(property => typeof property === 'boolean').reduce((prevVal, currVal) => prevVal || currVal, false);
    }, true);

  }

  ////////////////  FUNCTIONS //////////////////
  onSubmit() {
    this.submitted = true;
    if (this.required) {
      this.validateLeastOneSelected();
      this.onSubmitEvent.emit(!this.invalid);
    } else {
      this.onSubmitEvent.emit(true);
    }
  }

  onCancel() {
    this.onCancelEvent.emit(true);
  }
}
