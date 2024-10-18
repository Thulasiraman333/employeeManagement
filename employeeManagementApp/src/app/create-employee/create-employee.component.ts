import { Component, inject } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiResponseModel, Employee } from '../model/employee';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent {

  empService = inject(EmployeeService);

  EmployeeForm: FormGroup = new FormGroup({});
  employeeDataObj: any;
  constructor(private router: Router) {
    this.employeeDataObj = this.empService.employeeObj;
    if (this.employeeDataObj && this.employeeDataObj.empId) {
      this.initializeForm(this.employeeDataObj);
    } else {
      this.employeeDataObj['empId'] = 0;
      this.initializeForm(this.employeeDataObj);
    }

  }

  ngOnInit() {

  }

  initializeForm(item?: Employee) {
    this.EmployeeForm = new FormGroup({
      empId: new FormControl<number>(item ? item.empId : 0),
      empName: new FormControl<String>(item ? item.empName : ''),
      designation: new FormControl<String>(item ? item.designation : ''),
      empSalary: new FormControl<number>(item ? item.empSalary : 0),
    })
  }

  onEmployeeSave() {
    let empObj = this.EmployeeForm.value;
    this.empService.saveEmployee(empObj).subscribe((res: ApiResponseModel) => {
      this.router.navigateByUrl('/header');
      this.EmployeeForm.reset();
      alert(res.message);
    })
  }

  onEmployeeUpdate() {
    let empObj = this.EmployeeForm.value;
    this.empService.saveEmployee(empObj).subscribe((res: ApiResponseModel) => {
      this.router.navigateByUrl('/header');
      this.EmployeeForm.reset();
      alert(res.message);
    })
  }

}
