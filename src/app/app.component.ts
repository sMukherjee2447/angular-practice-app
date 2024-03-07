import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './My-Components/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TodosComponent],
})
export class AppComponent {
  title = 'angular-practice-app';
  constructor() {
    // setTimeout(() => {
    //   this.title = 'New angular app';
    // }, 2000);
  }
}

