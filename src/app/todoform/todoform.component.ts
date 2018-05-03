import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  label: string;
  @Output() onAdd = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
   submit() {
    if (!this.label) {
      return;
    }
    this.onAdd.emit({label: this.label});
    this.label = '';
  }
}
