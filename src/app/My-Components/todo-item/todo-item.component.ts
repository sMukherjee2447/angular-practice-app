import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}
  ngOnInit(): void {}
}
