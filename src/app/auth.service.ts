import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = "http://localhost:3000/login";
  constructor(private http : HttpClient) { }
  loginUser(user){
    console.log("user : "+user.username)
    return this.http.post<any>(this.loginUrl, user)
  }
}
