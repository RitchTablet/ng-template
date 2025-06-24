import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelpItem } from "@modules/help/models/help-item.model";

@Component({
  selector: "app-help-widget",
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      @for (item of items; track item.id) {
        <li>
          <strong>{{ item.title }}</strong>
          <p>{{ item.body }}</p>
        </li>
      }
    </ul>
  `,
})
export class HelpWidgetComponent {
  @Input() items: HelpItem[] = [];
}
