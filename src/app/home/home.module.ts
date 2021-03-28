// https://wireframe.cc/FE7fR4

import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../components/shared/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SignUpComponent } from "./signup/signup.component";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        SigninComponent, 
        SignUpComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule, // resolve problema de imports no signup
        ReactiveFormsModule, // importar ReactiveFormsModule para ter acesso ao FormBuilder
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule { }