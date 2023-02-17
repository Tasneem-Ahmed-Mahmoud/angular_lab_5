import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
cartItems:any=[];
cartNumber=new BehaviorSubject(0)

productList=new BehaviorSubject<any>([])
  constructor() { }

getProduct(){
  return this.productList.asObservable();
}
// setProduct(product :any){
//   this.cartItems.push(...product);
//   this.productList.next(product)
// }



addToCart(product:any){
  product.quantity=1;
  console.log(product)
  let tot=this.cartNumber.getValue()+1;
  this.cartNumber.next(tot);
  product.totalPrice=product.price;
  for (let index = 0; index < this.cartItems.length; index++) {
   if(product.id == this.cartItems[index].id){
    this.cartItems[index].quantity+=1;
     this.getTotalPrice+= this.cartItems[index].price;
      // tot +=this.cartItems[index].quantity

     console.log(` number: ${this.cartNumber.getValue()}`)
     return;

   }

  }
  console.log(product)
  this.cartItems.push(product);
  this.productList.next(this.cartItems);
   this.getTotalPrice();
  // console.log(this.cartItems);
}
getTotalPrice():number{
  let grandTotal=0;
  this.cartItems.map((a:any)=>{
grandTotal+=a.totalPrice ;
// console.log(`total is ${grandTotal}`)
  })
  return grandTotal;
}


removeCartItem(product:any){
  this.cartItems.map((a:any,index:any)=>{
if(product.id===a.id){
  let tot=this.cartNumber.getValue()-product.quantity
  this.cartNumber.next(tot)
    this.cartItems.splice(index,1);
  }


  })
}





plusItem(product:any){
  this.cartItems.map((a:any,index:any)=>{
    if(product.id===a.id){
      a.quantity++;

a.totalPrice+=a.price
let tot=this.cartNumber.getValue()+1
this.cartNumber.next(tot)
this.getTotalPrice()
    }})
}
minusItem(product:any){
  this.cartItems.map((a:any,index:any)=>{
    if(product.id===a.id ){
     if(a.quantity !=1){
      a.quantity--;
      a.totalPrice-=a.price
      this.getTotalPrice()
      console.log(`before${this.cartNumber.getValue() }`)
      // let tot=this.cartNumber.getValue() - 1;
      this.cartNumber.next(this.cartNumber.getValue() - 1)
      console.log(`after${this.cartNumber.getValue() }`)
     }else{
      this.removeCartItem(product)
     }

    }})
}




// removeAllCart(){
// this.cartItems=[];
// this.productList.next=(this.cartItems)

// }





}
