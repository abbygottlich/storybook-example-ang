import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todo: string;
  todoList: any;
  goodJob: boolean;

  constructor() {
    this.todo = "";
    this.todoList = [];
  }

  onAdd = () => {
    this.todoList.push(this.todo);
    this.todo = "";
  };

  completeTodo = index => {
    this.todoList.splice(index, 1);
    this.goodJob = true;
  };
}
