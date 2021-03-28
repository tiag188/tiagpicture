import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { SignUpService } from "./signup.service";
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidator {

    constructor(private signUpService: SignUpService) {

    }

    checkUserNameTaken() {
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(400))
                //swtchMap, após obter o Observable, é usado o swatchMap para trocar e obter novo Observable
                //Resultado de uma função com retorno simplificada
                .pipe(switchMap(userName =>
                    this.signUpService.checkUserNameTaken(userName)
                ))
                // .pipe(switchMap(userName => {
                //     return this.signUpService.checkUserNameTaken(userName);
                // }))
                .pipe(map(isTaken =>
                    isTaken ? { userNameTaken: true } : null
                ))
                .pipe(first())
        }
    }
}