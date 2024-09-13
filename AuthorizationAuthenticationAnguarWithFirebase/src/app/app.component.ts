import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularRnd';
  constructor(private _authService: AuthService){}

  ngOnInit(): void {
      this._authService.autoSignIn()
  }


  // @HostListener('window:beforeunload', ['$event'])
  // beforeunloadHandler(event) {
  //    return false;

  //    //I have used return false but you can your other functions or any query or condition
  // }
}


