import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  constructor(private http:HttpClient) { }
  update(user){
    console.log(user);
    let httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/users/up' , user,{headers:httpHeaders}).pipe(map((res:Response) => res.json ));

  }
  delete(user){
    console.log(user);
    let httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/users/delete' , user,{headers:httpHeaders}).pipe(map((res:Response) => res.json ));

  }

  registerUser(user){
    let httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register',user,{headers:httpHeaders}).pipe(map((res:Response) => res.json ));

  }
  authenticateUser(user){
    let httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user,{headers:httpHeaders});
  }

  getProfile(){{
    let httpHeaders = new HttpHeaders();
    this.loadToken();
    httpHeaders.append('Authorization',this.authToken);
    httpHeaders.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers:httpHeaders}).pipe(map((res:Response)=>res.json));
  }

  }
  storeUserData(token, user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }

  loadToken(){
    const token=localStorage.getItem('id_token');
    this.authToken=token;
  }


  logout(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();
  }
}
