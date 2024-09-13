import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public error : string;
  @ViewChild('signUpForm', {static:false}) signUpForm:NgForm;
  @ViewChild('signInForm', {static:false}) signInForm:NgForm;
  constructor(private router : Router, private authService: AuthService) { }

  ngOnInit(): void {


  }




  signUp(data:any){
    const email = data.email
    const password = data.password
    console.log(email, password);
    this.authService.signUp(email, password).subscribe(res =>{
      console.log(res);
    }, err =>{
      console.log(err)
      this.error = err
    })
  }

  signIn(data:any){
    const email = data.email
    const password = data.password
    console.log(email, password);
    this.authService.signIn(email, password).subscribe(res =>{
      console.log("SignIn Res:", res);
      this.router.navigate(['/dashboard'])
      console.log('ccc')
    }, err => {
      console.log(err)
      this.error = err
    })

  }

}
