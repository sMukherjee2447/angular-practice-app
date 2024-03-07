import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'This is title of first todo',
        description: 'This is description of first todo',
        active: true,
      },
      {
        sno: 2,
        title: 'This is title of second todo',
        description: 'This is description of second todo',
        active: false,
      },
      {
        sno: 3,
        title: 'This is title of third todo',
        description: 'This is description of third todo',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}
}
