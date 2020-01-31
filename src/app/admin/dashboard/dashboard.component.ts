import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  color = 'accent';
  mode = 'indeterminate';
  value = 100;
  patients:any;

  constructor(
    private userData: UserService
  ) {  }

  ngOnInit() {
    this.userData.getPatients().pipe(first())
      .subscribe(
        data => {
          this.patients = data;
        },
        err=> {
          console.log(err);
        }
      )
   }

}
