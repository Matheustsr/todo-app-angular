import { Todo } from './../models/todo.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root', // tag HTML
  templateUrl: './app.component.html', // path of HTML comp.
  styleUrls: ['./app.component.css'] // path of css comp.
})
export class AppComponent { //make public
  public todos: Todo[] = [];
  public title: string = "Meus projetos";
  public form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }

  addTask(){
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.saveToLocalStorage();
    this.clear();
  }

  clear(){
    this.form.reset();
  }
  removeTask(todo: Todo){
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

  saveToLocalStorage(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

  loadData(){
    const data = localStorage.getItem('todos');
  }
}

