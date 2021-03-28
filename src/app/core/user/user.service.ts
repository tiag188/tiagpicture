import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TokenService } from "../token/token.service";
import { User } from "./user";
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {

    //O BehaviorSubject armazena a última emissão até que alguém apareça para consumi-la.
    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;
    constructor(private tokenService: TokenService) {

        // usado para se fechar a aplicação, pegar o token novamente
        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
     }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.userName = user.name;
        this.userSubject.next(user);
    }

    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogget(){
        return this.tokenService.hasToken();
    }

    getUserName(){
        return this.userName;
    }
}