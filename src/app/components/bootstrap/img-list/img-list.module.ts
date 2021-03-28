import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "../../shared/card/card.module";
import { DarkenOnHoverModule } from "../../shared/directives/darken-on-hover/darken-on-hover.module";
import { ImgModule } from "../img/img.module";
import { FilterByDescriptionPipe } from "./filter.by-description.pipe";
import { ImgListComponent } from "./img-list.component";
import { ImgsComponent } from "./imgs/imgs.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { SerachComponent } from "./search/search.component";

@NgModule({
    declarations: [
        ImgListComponent,
        ImgsComponent,
        FilterByDescriptionPipe,
        LoadButtonComponent,
        SerachComponent
    ],
    imports: [
        CommonModule, 
        ImgModule,
        CardModule,
        DarkenOnHoverModule
    ]
})
export class ImgListModule { }