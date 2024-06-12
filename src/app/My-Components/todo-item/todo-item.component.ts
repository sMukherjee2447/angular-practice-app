import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [TodosComponent, CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo();
  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('Onclick has been triggered');
  }
}
