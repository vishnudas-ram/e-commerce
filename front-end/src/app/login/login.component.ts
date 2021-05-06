import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../app/services/auth.service';
import { Router } from '@angular/router';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [EmployeeService]
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {

  }
  onLoginSubmit(dat){
    
    const user={
      username: dat.username,
      password: dat.password
    }
    var data= new Object();
    var success= new Object();
  
    this.authService.authenticateUser(user).subscribe(data => {
      if(data['success']){
        this.authService.storeUserData(data['token'],data['user']);   
        this.router.navigate(['/home']);     
        alert("logined");
      }else{
        alert(data['msg']);
        this.router.navigate(['/login']);
      }
  });
  }
  }


