import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { UserService } from "../user/user.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    //o dolar é usada para indicar que vai guardar um valor do observable
    user$: Observable<User>;

    constructor(
        private userService: UserService, 
        private router: Router
        ) {

        //Este observable userService.getUser(); foi utilizado o Async pipe
        //Com o Async pipe conseguimos capturar a emissão do Observable diretamente do nosso template.
        this.user$ = userService.getUser();
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']); // Voltar para tela de Login
    }
}