"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var API_URL = 'http://localhost:3000';
//vai ser uma única instáncia para a plicação inteira utilizar o decorator @Injectable com o valor providedIn: 'root'
var AuthService = /** @class */ (function () {
    function AuthService(http, // para realizar solicitações assincronas no servidor usar http: HttpClient
    userService) {
        this.http = http;
        this.userService = userService;
    }
    AuthService.prototype.authenticate = function (userName, password) {
        var _this = this;
        //post ou gest devolve um observable
        // observe: 'response' para acessar o res.headers
        // para acessar o headers na resposta, é preciso expô-lo na hora que fizermos o post, para que possamos manipulá-lo. { observe: 'response' }
        return this.http
            .post(API_URL + '/user/login', { userName: userName, password: password }, { observe: 'response' })
            .pipe(operators_1.tap(function (res) {
            var authToken = res.headers.get('x-access-token');
            console.log("User " + userName + " authenticated with token " + authToken);
            // inspecionar elemento _> Application _> Storage -> Local Storage -> http://...
            // usar o http://calebb.net/ para decodigicar o token
            _this.userService.setToken(authToken);
        }));
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
