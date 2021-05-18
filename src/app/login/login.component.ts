import {Component, Inject, Injectable, OnInit} from '@angular/core';
import { AuthService} from "../auth.service";

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: any = {}
  constructor(private _auth: AuthService) { }

  isLogin:boolean = false;
  ngOnInit(): void {
  }
  loginUsers(){
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        data => {
          console.log(data['username'])
          if(data['result']==true){
            this.isLogin = true;
            alert("login successful");
          }
          else{
            this.isLogin = false;
            alert("login fail");
          }
        }
      )
  }
}
