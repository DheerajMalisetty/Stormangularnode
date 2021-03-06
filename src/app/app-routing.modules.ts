import { NgModule} from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";

const routes : Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: AppComponent
  }
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModules{}
