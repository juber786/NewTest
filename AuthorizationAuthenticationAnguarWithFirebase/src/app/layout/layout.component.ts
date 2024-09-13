import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public totalCartItem : number = 0;
  constructor(public _cartService:CartService) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe(res =>{
      console.log(res)
      this.totalCartItem = res.length;
    })
  }

}
