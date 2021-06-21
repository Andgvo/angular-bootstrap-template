import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UIInputType } from './models/input-type';
import { UIFormItem } from './models/ui-form-item';

@Component({
  selector: 'ui-form',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.scss']
})
export class UiFormComponent implements OnInit, OnChanges {

  @Input() title: string = '';
  @Input() inputs: UIFormItem[] = [];
  @Input() object: any = null;
  @Input() showCancel: boolean = true;
  @Input() submitLabel: string = 'Ok';
  @Input() cancelLabel: string = 'Cancel';
  @Output('onSubmit') onSubmitEvent = new EventEmitter<FormGroup>();
  @Output('onCancel') onCancelEvent = new EventEmitter<boolean>();

  formGroup: FormGroup = new FormGroup({});
  submitted: boolean = false;
  TYPES = UIInputType;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.inputs){
      let inputs: UIFormItem[] = changes?.inputs.currentValue;
      this.formGroup = new FormGroup({});
      inputs.forEach( input => {
        const control = new FormControl('', this.addValidators(input));
        if(input.type === UIInputType.SELECT && input.optionItems?.length != 0){
          control.setValue(input.optionItems![0].value);
        }else if(input.type === UIInputType.SELECT && input.optionItems?.length != 0){
          control.setValue(input.optionItems![0].value);
        }
        this.formGroup.addControl(input.name, control);
      });
    }
    if(changes.object && this.object != null){
      setTimeout(() => {}, 1000);
      if(this.inputs.length != 0){
        this.inputs.forEach( input => {
          //console.log(input.name);
          if(this.object[input.name])
            this.formGroup.get(input.name)?.setValue( this.object[input.name] );
        });
      }
    }
  }

  private addValidators( item: UIFormItem ): ValidatorFn[]{
    let validators: ValidatorFn[] = [];
    if(item.required)
      validators.push( Validators.required );
    if(item.regex)
      validators.push( Validators.pattern(item.regex));
    return validators;
  }

  /////////////// UTILS //////////////////////
  
  
  ////////////////  FUNCTIONS //////////////////
  onSubmit(){
    this.submitted = true;
    this.onSubmitEvent.emit(this.formGroup);
  }

  onCancel(){
    this.onCancelEvent.emit(true);
  }

  ngOnInit() {
  }

}
