import { Component } from '@angular/core';

import { CartServiceService } from '../services/cart-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  cartNumber:number=0;
constructor(private cartService:CartServiceService){}

ngOnInit(): void {
  this.cartService.cartNumber.subscribe((res)=>{
console.log(res)
this.cartNumber =this.cartService.cartNumber.getValue()
  })
}

}
