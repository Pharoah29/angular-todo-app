import { Component, OnInit, Input, Output,EventEmitter } from "@angular/core";


@Component({
  selector: "app-todo-items",
  templateUrl: "./todo-items.component.html",
  styleUrls: ["./todo-items.component.css"]
})
export class TodoItemsComponent implements OnInit {
  @Input() items: any[];
  @Output() remove : EventEmitter<number> = new EventEmitter<number>();
  @Output() clear : EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  checkItem(event, item): void {
    event.target.classList.add("checked");
  }

  removeItem(id: number){

    this.remove.emit(id);
  }

  clearAll(){
    this.clear.emit();
  }
}
