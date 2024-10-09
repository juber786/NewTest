import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { CartService } from 'src/app/_services/cart.service';


@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  public totalCartItem : number = 0;
  constructor(public _cartService:CartService, private _authService:AuthService) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe(res =>{
      console.log(res)
      this.totalCartItem = res.length;
    })
  }

  onSignOut(){
     this._authService.signOut();
  }

}
