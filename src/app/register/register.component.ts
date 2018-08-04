
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  validPassword = true;
  validUsername = true;
  validatePassword(password, password2) {
      if(password != password2) {
        this.validPassword=false;
        return false;
      }
      else {
        this.validPassword=true;
        return true;
      }
  }

  register(username, password, password2) {
    if (this.validatePassword(password, password2)) {
        this.service.findUserByUsername(username).then((username) => {
          if (username) {
            this.validUsername = false;
          }
          else {
            this.service
            .createUser(username, password)
            .then(() =>
              this.router.navigate(['profile']));
            this.validUsername = true;
          }
        });
      }
    }

  ngOnInit() {
  }

}