"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignUpComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var lower_case_validator_1 = require("src/app/components/shared/validators/lower-case.validator");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(formBuilder, userNotTakenValidatorService) {
        this.formBuilder = formBuilder;
        this.userNotTakenValidatorService = userNotTakenValidatorService;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var fn = this.userNotTakenValidatorService.checkUserNameTaken();
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.email
                ]
            ],
            fullName: ['',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(2),
                    forms_1.Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    forms_1.Validators.required,
                    lower_case_validator_1.lowerCaseValidator,
                    forms_1.Validators.minLength(2),
                    forms_1.Validators.maxLength(17)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8),
                    forms_1.Validators.maxLength(17)
                ]
            ]
        });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            templateUrl: './signup.component.html'
        })
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
