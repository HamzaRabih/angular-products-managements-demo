import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl:String="http://localhost:8083"

  constructor(private http:HttpClient) {
  }

  getAllProducts():Observable<any>{
    var p=this.http.get(this.apiUrl + "/products")
    return this.http.get(this.apiUrl + "/products");
  }

  deleteProduct(product : any){
    return this.http.delete(this.apiUrl + `/products/${product.id}`);
  }
}
