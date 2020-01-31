import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from "./../../_services/user.service";

import { Subscription } from "rxjs";
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {
  PredictSubscription: Subscription;
  predictionData: any;
  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.PredictSubscription = this.userSvc.PredictSubject.subscribe( (data:any) => {
      this.predictionData = data;
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.PredictSubscription.unsubscribe();
  }
}


