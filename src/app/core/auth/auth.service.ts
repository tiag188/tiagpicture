import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';


const API_URL = 'http://localhost:3000'

//vai ser uma única instáncia para a plicação inteira utilizar o decorator @Injectable com o valor providedIn: 'root'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient, // para realizar solicitações assincronas no servidor usar http: HttpClient
    private userService: UserService
  ) { }

  authenticate(userName: string, password: string) {

    //post ou gest devolve um observable
    // observe: 'response' para acessar o res.headers
    // para acessar o headers na resposta, é preciso expô-lo na hora que fizermos o post, para que possamos manipulá-lo. { observe: 'response' }
    return this.http
      .post(API_URL + '/user/login', { userName, password }, { observe: 'response' })
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        console.log(`User ${userName} authenticated with token ${authToken}`);

        // inspecionar elemento _> Application _> Storage -> Local Storage -> http://...
        // usar o http://calebb.net/ para decodigicar o token
        this.userService.setToken(authToken);

      }));
  }
}
