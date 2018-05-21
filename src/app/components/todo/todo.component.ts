import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent {
  ///
  public todoList: string[] = [];

  constructor() {}

  /**
   * Add item to the Todo list
   *
   * @param event The newly added item
   */
  public AddToList(event): void {
    let item = event.target;

    this.todoList.unshift(item.value);

    item.value = "";
  }

  public Checked(event, item): void {
    event.target.classList.add("checked");
  }

  /**
   * Remove the selected  item from the Todo list
   *
   * @param event The item
   */
  public RemoveFromList(item: number): void {
    this.todoList.splice(item, 1);
  }

  removeAll() {
    this.todoList = [];
  }
}
