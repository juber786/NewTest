import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpService } from '../_helpers/http.service';


@Injectable({
  providedIn: 'root'
})
export class MasterService {
  public url= "https://compmanage-53d21.firebaseio.com";
  constructor( private httpC:HttpClient) { }

  getRoot(){
    debugger;
    return this.httpC.get<any>(this.url +'/roots.json')
  }

  //add Product
  // productUrl= "https://compmanage-53d21.firebaseio.com/products.json";
  saveProduct(product){
    /*  return this.http.post(this.url, roots); */
    return this.httpC.post(this.url + '/products.json', product);
  }
  getProduct(){
    /*  return this.http.post(this.url, roots); */
    return this.httpC.get(this.url +'/products.json');
  }







}
