import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todo-example-ang";

  todo = "";

  todoList = [];

  goodJob = false;

  onAdd = () => {
    this.todoList.push(this.todo);
    this.todo = "";
  };

  showGoodJob = () => {
    this.goodJob = true;
    this.todoList = [];
  };
}
