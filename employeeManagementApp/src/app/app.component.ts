import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderFooterComponent } from "./header-footer/header-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employeeManagementApp';
}
