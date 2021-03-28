import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>; //capturar elemento do DOM para realizar o focus

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });


  }
  login() {
    console.log('logando.');
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => this.router.navigate(['user', userName]),
        err => {
          console.log(err);
          this.loginForm.reset(); //Limpar formuário no template

          //O Angular possui mecanismos que permitem a identificação do funcionamento do código no navegador, 
          //ou em outra plataforma, que pode ser no server side ou não.
          //verifica se está no browser para executar o focus
          //&& se for verdadeiro, ele executa o focus, por isso utiliza o &&
          this.platformDetectorService.isPlatformBrowser() && 
            this.userNameInput.nativeElement.focus(); //se isso fosse processado no lado do servidor, 
            //o que aconteceria é que, de preferência, a instrução this.userNameInput.nativeElement.focus() 
            //não seria executada. 
          alert("Invalid username or password!");
        });
  }
}