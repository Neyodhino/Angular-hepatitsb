import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  BASE_URL: string = "https://hospital-refined.herokuapp.com";

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.httpClient
      .post<any>(`${this.BASE_URL}/user/login`, {username, password})
      .pipe(
        map(user => {
          if (user) {
            //user.authdata = window.btoa(username + ':' + password);
            localStorage.setItem("currentUser", JSON.stringify(user));
          }
          return user;
        })
      );
  }

  logout(){
    localStorage.removeItem('currentUser')
  }
}
