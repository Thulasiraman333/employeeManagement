import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-header-footer',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent],
  templateUrl: './header-footer.component.html',
  styleUrl: './header-footer.component.scss'
})
export class HeaderFooterComponent {

}
