import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';

export const routes: Routes = [

  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'header', component: HeaderFooterComponent },
  { path: '', pathMatch: 'full', redirectTo: 'header' }
];
