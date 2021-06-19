import { Todo } from './../models/todo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tag HTML
  templateUrl: './app.component.html', // path of HTML comp.
  styleUrls: ['./app.component.css'] // path of css comp.
})
export class AppComponent { //make public
  public todos: Todo[] = [];
  public title: string = "Meus projetos";

  constructor() {
    this.todos.push(new Todo(1 ,'Passear com Marley', false));
    this.todos.push(new Todo(2 ,'Ir no mercado', false));
    this.todos.push(new Todo(3 ,'Cortar o cabelo', true));
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo); // get task index
    if(index !== -1){
      this.todos.splice(index, 1); // delete one index of list
    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUndone(todo: Todo){
    todo.done = false;
  }
}
