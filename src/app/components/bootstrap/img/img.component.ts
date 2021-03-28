import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-img',
    templateUrl: 'img.component.html'
})
export class ImgComponent {
    @Input() description = '';
    @Input() url = '';
}