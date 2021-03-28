//verifica se estámos rodando no navegador ou um server side

import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common'

@Injectable({ providedIn: 'root' })
export class PlatformDetectorService {
    // platformId: qual plataforma estou? Browser ou server-side? 
    // você vai injetar uma string mas o retorno é a identificação do PLATFORM_ID
    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    //retornar true and false se está no navegador ou server-side
    isPlatformBrowser() {
        return isPlatformBrowser(this.platformId)
    }
}