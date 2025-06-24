// Help page component
import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelpWidgetComponent } from "@modules/help/components/help-widget.component";
import { HelpItem } from "@modules/help/models/help-item.model";
import { HelpService } from "@modules/help/services/help.service";

@Component({
  selector: "app-help-page",
  standalone: true,
  imports: [CommonModule, HelpWidgetComponent],
  templateUrl: "./help-page.component.html",
})
export class HelpPageComponent implements OnInit {
  helpItems: HelpItem[] = [];
  private helpService = inject(HelpService);

  ngOnInit(): void {
    this.helpService.getHelpItems().subscribe((items) => (this.helpItems = items));
  }
}
