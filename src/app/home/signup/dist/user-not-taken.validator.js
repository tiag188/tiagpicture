"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserNotTakenValidator = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var UserNotTakenValidator = /** @class */ (function () {
    function UserNotTakenValidator(signUpService) {
        this.signUpService = signUpService;
    }
    UserNotTakenValidator.prototype.checkUserNameTaken = function () {
        var _this = this;
        return function (control) {
            return control
                .valueChanges
                .pipe(operators_1.debounceTime(400))
                //swtchMap, após obter o Observable, é usado o swatchMap para trocar e obter novo Observable
                //Resultado de uma função com retorno simplificada
                .pipe(operators_1.switchMap(function (userName) {
                return _this.signUpService.checkUserNameTaken(userName);
            }))
                // .pipe(switchMap(userName => {
                //     return this.signUpService.checkUserNameTaken(userName);
                // }))
                .pipe(operators_1.map(function (isTaken) {
                return isTaken ? { userNameTaken: true } : null;
            }))
                .pipe(operators_1.first());
        };
    };
    UserNotTakenValidator = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], UserNotTakenValidator);
    return UserNotTakenValidator;
}());
exports.UserNotTakenValidator = UserNotTakenValidator;
