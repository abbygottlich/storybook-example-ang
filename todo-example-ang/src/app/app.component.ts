import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todo-example-ang";

  onAdd = () => {
    // this.list.push(document.getElementById("todo").value);
    // this.setState({
    //   todos: this.list
    // });
    // document.getElementById("todo").value = null;
    console.log("added!");
  };
}

let list = [];
