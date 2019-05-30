import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public employee =[]
  

  constructor(private empservice:EmployeeService) { }

  ngOnInit() {
   this.empservice.getEmployees().subscribe(data =>{
     this.employee = data;
  console.log('data is printed ====>' ,data)
  
  
   });

  }

}
