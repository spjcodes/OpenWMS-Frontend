import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: any = false;
  public redirectUrl: string;
  constructor() { }
  loggin(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap((val) => {
        this.isLoggedIn = true;
        sessionStorage.setItem('status', this.isLoggedIn);
      })
    );
  }
  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('status');
  }
}
