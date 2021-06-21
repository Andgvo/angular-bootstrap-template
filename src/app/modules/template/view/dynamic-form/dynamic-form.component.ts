import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { UIInputType } from '@shared/components/ui-form/models/input-type';
import { UIFormItem } from '@shared/components/ui-form/models/ui-form-item';
import { BC_DYNAMIC_FORM } from "@shared/routing-list/ListLinks";


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {

  inputs: UIFormItem[] = [
    { label:'Name', name:'name', type: UIInputType.TEXT, required: true },
    { label:'Lastname', name:'lastname', type: UIInputType.TEXT },
    { label:'Age', name:'age', type: UIInputType.NUMBER, required: true }
  ];

  constructor(){
    BreadcrumbComponent.update( BC_DYNAMIC_FORM );
  }

}
