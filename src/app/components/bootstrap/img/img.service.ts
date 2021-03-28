import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Img } from "./img";

const API = 'http://localhost:3000';

//decorator utilizado como provider
@Injectable({ providedIn: 'root' })
export class ImgService {

    constructor(private http: HttpClient) { }

    listFromUser(userName: string) {
        //criado tipo img para tipar os dados do retorno da pai
        return this.http
            .get<Img[]>(API + '/' + userName + '/photos');
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString())

        return this.http
            .get<Img[]>(API + '/' + userName + '/photos', { params });
    }
}