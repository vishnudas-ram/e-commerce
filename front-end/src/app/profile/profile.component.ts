import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ValidateService } from '../services/validate.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;

  constructor(private AuthService: AuthService, private router:Router,private validateService: ValidateService ) { }

  ngOnInit() {
    const str = localStorage.getItem("user"); 
    let jsonStr: string = str;
let jsonObj = JSON.parse(jsonStr)
let id: string = jsonObj.id
let name: string = jsonObj.name
let username: string = jsonObj.username
let email: string = jsonObj.email
const user = 
  {
      "name": name,
      "id": id,
      "username":username,
      "email":email
  }
console.log(user);
let q=confirm("The profile details are\n Name:"+user.name+"\n Username:"+user.username+"\n Email:"+user.email+"\n Click ok if you want to edit the details");
if (q){
console.log("terer")
}
else{
  this.router.navigate(['/home']);
}

  }
  onRegisterSubmit(data){
    const str = localStorage.getItem("user"); 
    let jsonStr: string = str;
    let jsonObj = JSON.parse(jsonStr)
    let id: string = jsonObj.id
    const user={
      name: data.name,
      email: data.email,
      username: data.username,
      'id':id
    }
    if(!this.validateService.validateUpdate(user)){
      console.log(123);
      return false;
    }
    console.log(3);
    this.AuthService.update(user).subscribe(dataq =>{
      console.log(3);
      console.log(user.email);
    
    });    
    this.AuthService.logout();
    alert('User updated login in again')
    this.router.navigate(['']);

  }
  

}

