import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  username:String;
  email:String;
  password:String;
  dataRegister: Promise<any>;
  success: Promise<any>;
  
  constructor(private validateService: ValidateService ,private authservice:AuthService,private router:Router) { }

  ngOnInit() {
  }
  onRegisterSubmit(data){
    const user={
      name: data.name,
      email: data.email,
      username: data.username,
      password: data.password
    }
    if(!this.validateService.validateRegister(user)){
      console.log(123);
      return false;
    }
    console.log(3);

    this.authservice.registerUser(user).subscribe(dataq =>{
      console.log(3);
      this.router.navigate(['/login']);
      alert("user registered now login");
    });

  }
  
}
