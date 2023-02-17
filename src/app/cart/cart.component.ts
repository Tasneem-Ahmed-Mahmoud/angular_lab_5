import { Component ,OnInit} from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit{
totalItems:number=0;

product:any[]=[];
grandTotal:number=0;
constructor(private cartService:CartServiceService){}


ngOnInit(): void {
this.cartService.getProduct().subscribe((result)=>{
  // this.totalItems=result.length;
})

/////////////////////

this.cartService.getProduct().subscribe((res)=>{
  this.product=res;
  this.grandTotal=this.cartService.getTotalPrice();
this.product.forEach(element => {
this.totalItems+=element.quantity
});


})

}


removeItem(item:any){
  this.cartService.removeCartItem(item);
  this.totalItems-=item.quantity;
  this.grandTotal=this.cartService.getTotalPrice()
}

// removeAllTtem(){
//   this.cartService.removeAllCart();
// }

minus(item:any){
  this.cartService.minusItem(item);
  this.grandTotal=this.cartService.getTotalPrice();
  this.totalItems--
}
plus(item:any){
  this.cartService.plusItem(item);
  this.grandTotal=this.cartService.getTotalPrice()
  this.totalItems++
}


}
