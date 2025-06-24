// Help service
import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HelpItem } from "@modules/help/models/help-item.model";

@Injectable({ providedIn: "root" })
export class HelpService {
  private http = inject(HttpClient);

  getHelpItems(): Observable<HelpItem[]> {
    return this.http.get<HelpItem[]>("https://jsonplaceholder.typicode.com/posts?_limit=5");
  }
}
