import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _HttpClient: HttpClient) {

   }


 getProduct():Observable<any>{

 return  this._HttpClient.get("https://fakestoreapi.com/products");

 }


 getProductDetails(id: number):Observable<any>{
  return  this._HttpClient.get(`https://fakestoreapi.com/products/${id}`);

 }









}
