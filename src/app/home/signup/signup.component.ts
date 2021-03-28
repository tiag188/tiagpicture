import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { lowerCaseValidator } from "src/app/components/shared/validators/lower-case.validator";
import { NewUser } from "./new-user";
import { SignUpService } from "./signup.service";
import { UserNotTakenValidator } from "./user-not-taken.validator";

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidator,
        private signUpService: SignUpService,
        private router: Router
    ) { }

    ngOnInit(): void {
        const fn = this.userNotTakenValidatorService.checkUserNameTaken();
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [// validadores sincronos
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(17)
                ], //// validadores assíncronos ( verificar no back end (api))
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(17)
                ]
            ]
        });
    }

    signup() {

        const newUser = this.signupForm.getRawValue() as NewUser; //Adicionar (submit)="signup" no <form>
        this.signUpService
            .signup(newUser)
            .subscribe(
                () => this.router.navigate(['']),
                err => console.log(err)
            );
    }
}