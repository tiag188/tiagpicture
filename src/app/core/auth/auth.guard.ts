import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../user/user.service";

//O guarda de rotas serve para darmos consistência para nossa aplicação, 
//liberando acesso apenas para as rotas que fazem sentido para nosso usuário.
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        if (this.userService.isLogget()) {
            this.router.navigate(['user', this.userService.getUserName()])
            return false;
        }
        return true;
    }
}