import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal : number = 0;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe(res => {
      this.products = res;
      console.log('xx',res);
      this.grandTotal = this._cartService.getTotalPrice();
    })
  }

  removeItem(item){
    this._cartService.removeCartItem(item);
  }
  emptyCart(){
    this._cartService.removeAllCart();
  }

}
