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

  onAdd = () => {
    this.todoList.push(this.todo);
    console.log("added", this.todoList);
  };
}

let list = [];
