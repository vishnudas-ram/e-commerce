import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private AuthService: AuthService,private router:Router) { }

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
     

  }
  onProfile(){
    this.router.navigate(['/profile']);
    return true;
    
    }
    onDelete(){
      const str = localStorage.getItem("user"); 
    let jsonStr: string = str;
    let jsonObj = JSON.parse(jsonStr)
    let id: string = jsonObj.id
    const user={
      'id':id
    }
      this.AuthService.delete(user).subscribe(dataq =>{
        console.log(3);
        console.log(user.id);
      
      });    
      this.AuthService.logout();
      alert('User deleted redirecting to login')
      this.router.navigate(['']);
    }

}
