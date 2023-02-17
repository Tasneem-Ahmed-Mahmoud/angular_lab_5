import { Component ,OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{

products:any[]=[];

constructor(private _ProductService:ProductServiceService, private router:Router, private cartService:CartServiceService){


}


ngOnInit(): void {

this. _ProductService.getProduct().subscribe(
  (response)=> {this.products=response;
    // console.log(this.products)
this.products.forEach((a:any)=>{
Object.assign(a,{quantity:1,total:a.price})
})


  },
(error)=>{ console.log(error)}


);

}


show(id:number){
   this.router.navigate(['./details',id])

  }

 addToCart(item:any){
    //

    
this.cartService.addToCart(item);





   }

}
