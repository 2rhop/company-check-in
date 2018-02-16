import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClassField } from '@angular/compiler/src/output/output_ast';
import { Person } from '../../../interfaces/person';

@Component({
  selector: 'pr-sign-form',
  templateUrl: './pr-sign-form.component.html',
  styleUrls: ['./pr-sign-form.component.css'],
})
export class PrSignFormComponent implements OnInit {

  @Output() text_field = new EventEmitter();
  invalid: string;

  constructor() { }

  ngOnInit() {
    this.init();
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
    this.invalid = 'invalid';
  }

  submit(t) {
    this.text_field.emit(t)
    this.init();
  }

  init() {
    this.invalid = undefined;
  }

}
