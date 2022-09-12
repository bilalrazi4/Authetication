import { NgModule } from '@angular/core';
import{ HttpClientModule }from'@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './main/home/home.component';
import { CreateComponent } from './main/create/create.component';
import { LoginComponent } from './main/login/login.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { BridgeService } from './main/Services/bridge.service';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthGuardService } from './guards/auth-guard.service';
import { JwtModule } from "@auth0/angular-jwt";




export function tokenGetter() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    LoginComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
      
    
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:['localhost:7042'],
        disallowedRoutes: []
      }
    }),
    

    
    
  
    
  ],
  providers: [
    BridgeService,
    
    JwtHelperService,
    AuthGuardService,
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
