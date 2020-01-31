import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  color = 'accent';
  mode = 'indeterminate';
  value = 100;
  doctor:any;
  loaded: boolean = false;

  constructor( 
    private userData: UserService
  ) { }

  ngOnInit() {

    const id =this.userData.retrieveToken();

    this.userData.getUser(id).pipe(first())
      .subscribe(
        data => {
          this.doctor = data;
          this.loaded = true;
        },
        error => {
          console.log(error);
        }
      )
  }

}
