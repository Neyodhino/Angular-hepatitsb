import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import {first} from 'rxjs/operators'
  import { from } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  color = 'accent';
  mode = 'indeterminate';
  value = 100;
  patients:any
  loaded:boolean = false;

  constructor(
    private user: UserService
  ) { }

  ngOnInit() {

    this.user.getPatients().pipe(first())
      .subscribe( 
        data =>{
          this.patients = data;
          console.log(this.patients);
          this.loaded = true;
        },
        error =>{
          console.log(error);
        }
      )
  }

}
