import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Todo List";

  constructor(private http: Http) {
   // const data = this.getJSONData();
  }

  private getJSONData() {
    return this.http.get("../assets/data.store.json").subscribe(res => {
      debugger;
    });
  }
}
