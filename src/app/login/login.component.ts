import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../_services/auth.service";
import { first } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {


  constructor(
    private auth: AuthService, 
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() { }

    onSubmit(form: NgForm){
      const username = form.value.username;
      const password = form.value.password;

     this.auth.login(username, password).pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/dashboard'])
        },
        error => {
          console.log(error);
        }
      )
    }
    
}
