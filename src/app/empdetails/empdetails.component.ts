import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service'
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  public employee =[]
      

  constructor(private empservice:EmployeeService) { }

  ngOnInit() {
 this.empservice.getEmployees().subscribe(data =>this.employee =data)


  }

}
