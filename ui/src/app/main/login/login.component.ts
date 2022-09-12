import { Component, Inject, OnInit } from '@angular/core';
import{FormBuilder}from'@angular/forms'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import{BridgeService}from'../Services/bridge.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:BridgeService,private jwtHelper:JwtHelperService,
    private router:Router) { }
  user:any
  invalidLogin?:boolean

  ngOnInit(): void {
    this.setFormsControl();
    debugger
  }

  setFormsControl(){
    this.user = this.fb.group({
      username:[''],
      password:[''],
    })
  }

  login(){
    const userData = this.user.value;
    
    this.service.LoginNow(userData).subscribe(data => {
    
      console.log(data);


      const token = data.token;
      localStorage.setItem("jwt",token);
      this.invalidLogin = false;
      this.router.navigate(['/dashboard']);
     console.log("login success");
      
    },err => {
      this.invalidLogin = true;
    })
  }


  isUserAuthenticated(){
  
    const token = localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired("jwt")){
      return true;
    }
    else{
      return false;
    }
  }

}
