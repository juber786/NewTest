import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../_appInterface/auth.reponse.interface';
import { User } from '../_appModels/user.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _apiKey = environment.apiKey;

  user = new BehaviorSubject<User>(null);

  tokenExpirationTimer:any;

  constructor(private http:HttpClient, private errorService:ErrorService, private router:Router) { }

  signUp(email, password){
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this._apiKey}`, {
      email: email,
      password:password,
      returnSecureToken:true
    }).pipe(
      catchError(err => {
        return this.errorService.handleError(err)
      }),
      tap( res =>{
        this.authenticatedUser(res.email, res.localId, res.idToken, +res.expiresIn)
      })
    )
  }

  signIn(email,password){
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this._apiKey}`,{
      email: email,
      password:password,
      returnSecureToken:true
    }).pipe(
      catchError(err => {
        return this.errorService.handleError(err)
      }),
      tap( res =>{
        this.authenticatedUser(res.email, res.localId, res.idToken, +res.expiresIn)
      })
    )
  }

  autoSignIn(){
    const userData = JSON.parse(localStorage.getItem('UserData'))
    if(!userData){
      return;
    }

    const loggedInUser = new User(userData.email,userData.id,userData._token, new Date(userData._tokenExpairationDate))
    if(loggedInUser.token){

      this.user.next(loggedInUser);
      this.router.createUrlTree(['/dashboard'])
      const expirationDuration = new Date (userData._tokenExpairationDate).getTime() - new Date().getTime();
      this.autoSignOut(expirationDuration)
    }

  }

  signOut(){
    this.user.next(null);
    this.router.navigate(['/login'])
    localStorage.removeItem('UserData')

    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer)
    }
    this.tokenExpirationTimer = null;
  }

  autoSignOut(expirationDuration:number){
      this.tokenExpirationTimer = setTimeout(() => {
             this.signOut();
         }, expirationDuration)
  }

  private authenticatedUser(email, userID, token, expiresIn){
     const expirationDate = new Date(new Date().getTime() + expiresIn*1000)
     const user = new User(email, userID, token, expirationDate );
     console.log("userData",user);
     this.autoSignOut(expiresIn*1000)
     this.user.next(user); // Storing Data In User Subject
     localStorage.setItem('UserData', JSON.stringify(user))

  }
}
