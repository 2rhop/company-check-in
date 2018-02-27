import { Component, OnInit, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClassField } from '@angular/compiler/src/output/output_ast';
import { Person } from '../../../interfaces/person';
import { MessageService } from '../../../core/services/messages/message.service';
import { ToastOptions } from 'ng2-toastr';

@Component({
  selector: 'pr-sign-form',
  templateUrl: './pr-sign-form.component.html',
  styleUrls: ['./pr-sign-form.component.css'],
})
export class PrSignFormComponent implements OnInit {

  @Output() text_field = new EventEmitter();
  invalid: string;

  constructor(private messages: MessageService, private view: ViewContainerRef) { }

  ngOnInit() {
  }

  onSubmit(t: NgForm) {
    var text: string = t.value.name;
    (this.isValid(text) ? this.submit(text) : this.setInvalidField());
  }

  isValid(t: string): boolean {
    let len: number = t.length;
    return len == 9;
  }

  setInvalidField() {
    this.messages.showWarning('<strong>Oh god!</strong> You have typed an incorrect key!', this.view,null,
      <ToastOptions>{ enableHTML: true,toastLife:3000 });
  }

  submit(t) {
    this.text_field.emit(t)
  }
}
