import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import {NavbarComponent} from "./navbar/navbar.component";
import {PortalsComponent} from "./portals/portals.component";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModules} from "./app-routing.modules";
import { HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PortalsComponent,
        LoginComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
