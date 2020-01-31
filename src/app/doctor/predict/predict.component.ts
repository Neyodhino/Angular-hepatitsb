import { Component, OnInit } from '@angular/core';
import { ResultComponent } from '../result/result.component';
import { Router, ActivatedRoute, Params } from "@angular/router"
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserService } from "../../_services/user.service";
import { first } from 'rxjs/operators';
import { Predict } from "../../_models/predict";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})
export class PredictComponent implements OnInit {

  predict:Predict = {
    id:0,
    Control: 0,
    AST: 0,
    WBC: 0,
    HBeAg:'',
    Gender:'',
    HBVDNA: 0,
    lymph: 0
  }

  constructor(
    private user: UserService,
    private router: Router,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.predict['id'] = this.route.snapshot.params['id'];
  }

  openDialog() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.width = "50%";
    dialogconfig.height = "60%";
    this.dialog.open(ResultComponent, dialogconfig);
}

  onSubmit(predictfrm: NgForm){
    this.predict = { id:predictfrm.controls.id.value,
       Control: predictfrm.controls.control.value,
       AST: predictfrm.controls.ast.value,
        WBC: predictfrm.controls.wbc.value,
        HBeAg: predictfrm.controls.hbeag.value,
        Gender: predictfrm.controls.gender.value,
        HBVDNA: predictfrm.controls.hbvdna.value,
        lymph: predictfrm.controls.lymph.value};
    this.user.predictPatient(this.predict).pipe(first())
    .subscribe(
      data => {
        console.log(data);
        this.user.PredictSubject.next(data);
        this.openDialog();

      },
      error => {
        console.log(error);
      }
    )
  }

}

