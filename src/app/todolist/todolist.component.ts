import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  @Input()  todos;
  @Output() onComplete = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
