import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  productDetails:any={};
id :number=0;
constructor(private _ProductService:ProductServiceService , private activatedRoute:ActivatedRoute){}


ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.params['id'];
this.getDetails(this.id)
}

getDetails(id:number){
  this._ProductService.getProductDetails(id).subscribe(
    (response)=>{this.productDetails=response}
   )
}


}
