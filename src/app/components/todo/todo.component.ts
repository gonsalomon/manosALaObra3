import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Todo as TaskType } from '../../Todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: TaskType;
  @Output() requestDeletion = new EventEmitter<string>;
  parentRef: AppComponent

  constructor() {
  }

  ngOnInit(): void {
  }

  setComplete():void{
    this.todo.complete = !this.todo.complete;
  }

  deleteTask():void{
    this.requestDeletion.emit(this.todo.description);
  }
}
