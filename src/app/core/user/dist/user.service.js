"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var jwt_decode = require("jwt-decode");
var UserService = /** @class */ (function () {
    function UserService(tokenService) {
        this.tokenService = tokenService;
        //O BehaviorSubject armazena a última emissão até que alguém apareça para consumi-la.
        this.userSubject = new rxjs_1.BehaviorSubject(null);
        // usado para se fechar a aplicação, pegar o token novamente
        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }
    UserService.prototype.setToken = function (token) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    };
    UserService.prototype.getUser = function () {
        return this.userSubject.asObservable();
    };
    UserService.prototype.decodeAndNotify = function () {
        var token = this.tokenService.getToken();
        var user = jwt_decode(token);
        this.userName = user.name;
        this.userSubject.next(user);
    };
    UserService.prototype.logout = function () {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    };
    UserService.prototype.isLogget = function () {
        return this.tokenService.hasToken();
    };
    UserService.prototype.getUserName = function () {
        return this.userName;
    };
    UserService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
