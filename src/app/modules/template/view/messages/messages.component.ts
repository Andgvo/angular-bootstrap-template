import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { BC_MESSAGES } from "@shared/routing-list/ListLinks";
import { MessagesService } from "@services/messages.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  inputSimpleMessage: string;
  inputContent: string;
  inputTitle: string;
  inputIcon: string;

  constructor(private _menssage: MessagesService) {
    BreadcrumbComponent.update(BC_MESSAGES);
    this.inputSimpleMessage = "This is a simple messages";
    this.inputTitle = "Some title";
    this.inputContent = "This is a complex messages";
    this.inputIcon = "message";
  }

  showMessage(type: string) {
    this._menssage.showMessage(this.inputContent, type, this.inputTitle, this.inputIcon);
  }

  showSuccess() {
    this._menssage.success(this.inputSimpleMessage);
  }

  showInfo() {
    this._menssage.info(this.inputSimpleMessage);
  }

  showWarning() {
    this._menssage.warning(this.inputSimpleMessage);
  }

  showDanger() {
    this._menssage.danger(this.inputSimpleMessage);
  }

  ngOnInit() {
  }

}