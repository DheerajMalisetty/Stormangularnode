import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NavbarComponent} from "./navbar/navbar.component";
import {PortalsComponent} from "./portals/portals.component";
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PortalsComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
