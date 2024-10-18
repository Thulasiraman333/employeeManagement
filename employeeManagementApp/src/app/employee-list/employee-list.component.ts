import { Component, inject } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ApiResponseModel, Employee } from '../model/employee';
import { NavigationExtras, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  constructor(private router: Router) { }
  empService = inject(EmployeeService);
  EmployeeList: Employee[] = [];
  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.empService.getEmployeeList().subscribe((res: ApiResponseModel) => {
      this.EmployeeList = res.data;
    })
  }

  addEmployee() {
    this.empService.employeeObj = {};
    this.router.navigate(['create-employee', { empId: 0, isUpdate: false }])
  }

  update(empId: number) {
    this.empService.employeeObj = this.EmployeeList.find((el) => el.empId == empId);
    this.router.navigate(['create-employee']);
  }

  delete(empId: number) {
    this.empService.DeleteEmployee(empId).subscribe((res: ApiResponseModel) => {
      this.getAllEmployees();
      alert(res.message);
    })
  }
}
