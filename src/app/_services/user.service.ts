import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map} from "rxjs/operators";
import { Observable } from "rxjs";

import { Doctor } from '../_models/doctor';
import { Patient } from '../_models/patients';
import { Predict } from "../_models/predict";
import { from, Subject } from 'rxjs';

@Injectable()

export class UserService {

  BASE_URL:string = 'https://hospital-refined.herokuapp.com';

  PredictSubject: Subject<any> = new Subject<any>();

  constructor( private httpClient: HttpClient ) { }

  retrieveToken(){
    const jwt = new JwtHelperService();

    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const decodedToken = jwt.decodeToken(currentUser.token);
     return decodedToken.user_["userid"];
  }

  //get a particular doctor or admin data in the database.
  getUser(id: string) {
    return this.httpClient
      .get<any>(`${this.BASE_URL}/hospital/oauthc/doctor/${id}`)
      .pipe(
        (user => {
          return user;
        })
      );
  }


//get all patients in the database
  getPatients(){
    return this.httpClient.get<any>(`${this.BASE_URL}/hospital/oauthc/patients`)
      .pipe(
        (patients=> {
          return patients
        })
      );
  }

  //get a particular patient dara in the databse
  getPatient(id: string) {
    return this.httpClient
      .get<any>(`${this.BASE_URL}/hospital/oauthc/patient/${id}`)
      .pipe(
        (user => {
          return user;
        })
      );
  }

  //predict a particular patient.
  predictPatient(predict:Predict):Observable<Predict>{
    console.log(predict);
    return this.httpClient
      .post<Predict>(`${this.BASE_URL}/predict/oauthc/${predict["id"]}`, predict, /** {headers: new HttpHeaders().set('Content-Type', 'application/json')} **/)
      .pipe(
        map(res => {
          if (res) {
            console.log(res)
          }
          return res;
        })
      );
  }

}
