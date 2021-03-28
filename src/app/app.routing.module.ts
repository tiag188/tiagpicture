import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { ImgFormComponent } from "./components/bootstrap/img-form/img-form.component";
import { ImgListComponent } from "./components/bootstrap/img-list/img-list.component";
import { ImgListResolver } from "./components/bootstrap/img-list/img-list.resolver";
import { NotFoundComponent } from "./components/errors/not-found/not-found.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./home/signin/signin.component";
import { SignUpComponent } from "./home/signup/signup.component";

const routes: Routes = [
    {
        path: '', //localhost:4200 
        component: HomeComponent, //será acessado a home
        canActivate: [AuthGuard], //Verifica se o usuário está logado e redireciona para uma tela especifica,
        //neste caso está sendo redirecionada para a tela de user/:userName que apresenta todas as fotos
        children: [ // usar rotas filhas routeroutlet
            {
                path: '', //será exibido primeiro 
                component: SigninComponent, //Login
            }, {
                path: 'singup',
                component: SignUpComponent, //Registrar
            }

        ]
    },
    {
        path: 'user/:userName',
        component: ImgListComponent,
        resolve: {
            imgs: ImgListResolver
        }
    },
    { path: 'p/form', component: ImgFormComponent },
    { path: '**', component: NotFoundComponent }

];

//decorators
@NgModule({
    imports: [RouterModule.forRoot(routes)], //pega o dominio e adiciona a rota, recebe uma lista de rotas
    exports: [RouterModule]
})
export class AppRoutingModule { }
