import { Component, Inject, inject, OnInit, Renderer2 } from '@angular/core';
import { Todo as TodoType } from './Todo'
import { InputComponent as Input } from './components/input/input.component';
import { TodoComponent as Todo } from './components/todo/todo.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'manos-a-la-obra';
  theme: Theme = 'light-theme';
  newTodo: string = '';
  
  todos: TodoType[] = [
    {
      description: 'Terminar la lista esta',
      complete: false
    },
    {
      description: 'Dar función al sitio',
      complete: false
    },
    {
      description: 'Armar tema día/noche',
      complete: false
    }
  ];

  constructor(@Inject(DOCUMENT) 
    private document: Document,
    private renderer: Renderer2
    ){

  }

  
  ngOnInit(){
    this.initializeTheme();
  }

  initializeTheme = ():void => this.renderer.addClass(this.document.body, this.theme);

  switchTheme(){
    this.document.body.classList.replace(this.theme, this.theme === 'light-theme'? (this.theme = 'dark-theme') : (this.theme = 'light-theme'))
  }

  add(task: string): void{
    this.todos.push({
      description: task,
      complete: false
    })
  }

  remove(task: string): void{
    this.todos = this.todos.filter(oldTask=> oldTask.description!=task);
  }
}

export type Theme = 'light-theme' | 'dark-theme';
