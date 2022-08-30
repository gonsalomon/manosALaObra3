import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() newTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewTask(value: string){
    this.newTask.emit(value);
  }
}
