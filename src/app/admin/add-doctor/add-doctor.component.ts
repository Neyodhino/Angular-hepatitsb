import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  firstName:string;
  lastName: string;
 
  constructor(  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.firstName);
  }

}
