"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var img_form_component_1 = require("./components/bootstrap/img-form/img-form.component");
var img_list_component_1 = require("./components/bootstrap/img-list/img-list.component");
var img_list_resolver_1 = require("./components/bootstrap/img-list/img-list.resolver");
var not_found_component_1 = require("./components/errors/not-found/not-found.component");
var auth_guard_1 = require("./core/auth/auth.guard");
var signin_component_1 = require("./home/signin/signin.component");
var signup_component_1 = require("./home/signup/signup.component");
var routes = [
    {
        path: '',
        component: signin_component_1.SigninComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'signup',
        component: signup_component_1.SignUpComponent
    },
    {
        path: 'user/:userName',
        component: img_list_component_1.ImgListComponent,
        resolve: {
            imgs: img_list_resolver_1.ImgListResolver
        }
    },
    { path: 'p/form', component: img_form_component_1.ImgFormComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
//decorators
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
