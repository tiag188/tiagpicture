import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Img } from '../img/img';
import { ImgService } from '../img/img.service';

@Injectable({ providedIn: 'root' })
export class ImgListResolver implements Resolve<Observable<Img[]>>{

    constructor(private service: ImgService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userName = route.params.userName;
        return this.service
            .listFromUserPaginated(userName, 1);
    }
}