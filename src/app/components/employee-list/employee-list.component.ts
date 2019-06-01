import { Employee } from "./../../models/employeeModels";
import { EmployeeService } from "./../../services/employee.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  public Employee:any;
  public Employees:any=[];
  data:any={}
  display='none';
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
   
    

    this.Employee = JSON.parse(localStorage.getItem('empData'));
    this.Employees.push(this.Employee);
   
    console.log(this.Employee, "cccccccccccccc")
    console.log(this.Employees, "bbbbbbbbb")


    
}

  deleteEmp(employee: Employee) {
    localStorage.removeItem('empData');
    
  //   for(let i = 0; i < this.Employees.length; ++i){
  //     if (this.Employees[i].id === this.Employee.id) {
  //         this.Employees.splice(i,1);
  //         console.log(this.Employees,"after")
  //     }
  // }
    
  }

  editEmp(employee: Employee) {
    this.data = employee
    console.log(this.data,"edit")
  //  localStorage.setItem('empData', 'newData');
  }

  openModalDialog(){
    this.display='block'; //Set block css
 }
}
