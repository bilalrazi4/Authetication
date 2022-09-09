import { Component, OnInit } from '@angular/core';
import{FormBuilder}from'@angular/forms'
import{BridgeService}from'../Services/bridge.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:BridgeService) { }
  user:any
  ngOnInit(): void {
    this.setFormsControl();
  }

  setFormsControl(){
    this.user = this.fb.group({
      username:[''],
      password:[''],
    })
  }

  login(){
    const userData = this.user.values;
    this.service.LoginNow(userData).subscribe(data => {
      
    })
  }

}
