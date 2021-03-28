import { Injectable } from "@angular/core";

const KEY = 'authToken';
@Injectable({ providedIn: 'root' })
export class TokenService {

    hasToken() {
        // usar o !! muda do retorno string ou false para true ou false
        // serve para converter o valor de string em boleano
        return !!this.getToken();
    }

    setToken(token) {
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        return window.localStorage.getItem(KEY)
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }
}