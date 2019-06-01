import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 
import { Router } from "@angular/router";  
import { Employee } from 'src/app/models/employeeModels';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Input() empDetail:any
  
  addData:[]
  allData:any=[];
  addForm: FormGroup;  
  btnvisibility: boolean = true;  
  categories = ['Angular', 'Node', 'React','D3']
  display='none';
  constructor(private formBuilder: FormBuilder, private router: Router) {  
  }  
  

  ngOnInit() {  
  
    this.addForm = this.formBuilder.group({  
      id: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],  
      employee_name: ['', [Validators.required,  Validators.pattern("^[a-zA-Z]+$")]],  
      employee_salary: ['', [Validators.required, Validators.pattern("^[0-9]+$") ] ],  
      employee_age: ['', [Validators.required,Validators.pattern("^[0-9]+$") ]],
      employee_phoneno: ['', [Validators.required,Validators.pattern("^[0-9]+$") ]],  
      employee_address: ['', Validators.required],  
      employee_gender: ['', Validators.required],  
      employee_category: ['', Validators.required],  
      
    }); 
    
   } 
  
  
  onSubmit() {  
   console.log(this.addForm.value, "ddddddddd")
   this.addData = this.addForm.value 
   console.log(this.addData, "mydata")
   localStorage.setItem('empData', JSON.stringify(this.addData));
   this.addForm.reset(); 
   this.router.navigate(['employeeList']);  
  
  }  

  closeModalDialog(){
    this.display='none'; 
  }


}
