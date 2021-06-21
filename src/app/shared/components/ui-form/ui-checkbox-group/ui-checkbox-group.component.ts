import { Component, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UIOptionItem } from '../models/ui-option-item';

@Component({
  selector: 'ui-checkbox-group',
  template: `
    <div class="pt-1" *ngIf="options">        
        <div class="form-check form-check-inline" *ngFor="let option of options; let i = index">
            <mat-checkbox [(ngModel)]="valueBoolean[i]" [color]="color" (change)="updateValue($event.checked, option)" [disabled]="option.disabled!">
                {{ option.label }}
            </mat-checkbox>
        </div>
    </div>
    `,
  //styleUrls: ['./main-checkbox-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UICheckboxGroup),
      multi: true
    }
  ]
})
export class UICheckboxGroup implements OnChanges, ControlValueAccessor {

  @Input() options: UIOptionItem[] = [];
  @Input() property:string = '';
  @Input() color:string = 'primary';
  
  value: any[] = [];
  valueBoolean: Boolean[] = [];
  isDisabled: boolean = false;

  onChange = (_: any) => { }
  onTouch = () => { }


  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.opciones && this.options != null ){
      this.valueBoolean = new Array(this.options.length).fill(false);
    }
  }

  /************************* OVERRIDE *******************/
  writeValue(value: any): void {
    if (value) {
        this.setValues(value);
    } else {
        this.value = [];
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  
  /********************** UTILS **********************/
  updateValue(checked:boolean, option: UIOptionItem){
    if(checked){
        this.value.push(option.value);
    }else{
        for(var i = 0; i< this.value.length; i++){
            if( this.value[i] === option.value ){
            this.value.splice(i, 1);
            break;
            }
        }
    }
    this.onChange(this.value);
  }
  
  private setValues(values: any[]){    
    let arrayAux = [];
    for(var i = 0; i< values.length; i++){
        for( var j =0; j < this.options.length; j++ ){
            if( values[i] === this.options[j].value ){
            arrayAux.push( {index: j, value: this.options[j] } );
            break;
            }
        }
    }
    arrayAux.forEach( element => {
        this.valueBoolean[element.index] = true;
    });
    this.value = values;
    this.onChange(this.value);
  }
}
