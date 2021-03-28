import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ImgComponent } from "./img.component";

@NgModule({
    declarations: [ImgComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ImgComponent]
})
export class ImgModule { }