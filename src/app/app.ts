import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { environment } from "environments/environment";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected title = "ng-template";
  protected isProduction = environment.production;

  protected getVersion(): string {
    return environment.production ? "Production" : "Development";
  }
}
