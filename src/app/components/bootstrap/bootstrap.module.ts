import { NgModule } from '@angular/core';
import { ImgListModule } from './img-list/img-list.module';
import { ImgFormModule } from './img-form/img-form.module';
import { ImgModule } from './img/img.module';

@NgModule({
    imports:[
        ImgModule,
        ImgFormModule,
        ImgListModule
    ]
})
export class BootstrapModule {

}