import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { Router } from '@angular/router';
import { ProductService } from'src/app/services/product.service';
import { Product } from '../models/product';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  productList: Product[]=[];

  constructor(private authService:AuthService,private router:Router,private productService:ProductService,private msg:MessengerService) { }

  ngOnInit() {
    
    this.productList=this.productService.getProducts()
    console.log(this.productList);
    console.log(13)
  }
  handleAddToCart(){
    console.log(456);
    this.msg.sentMsg(this.productService)
  }
  onLogoutClick(){
    this.authService.logout();
    alert("You are loged out")
    this.router.navigate(['']);
    return false;
  }
  onProfileClick(){
    this.router.navigate(['/view']);
    return true;
  }
  onDeletClick(){
    this.router.navigate(['/profile']);
    return true;
  }

}
