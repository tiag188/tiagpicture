import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Img } from '../../img/img';

@Component({
  selector: 'app-imgs',
  templateUrl: './imgs.component.html',
  styleUrls: ['./imgs.component.css']
})
export class ImgsComponent implements OnChanges {

  @Input() imgs: Img[] = []; // inbound property
  rows: any[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.imgs)
      this.rows = this.groupColumns(this.imgs);
  }

  groupColumns(imgs: Img[]) {
    const nweRows = [];

    for (let index = 0; index < imgs.length; index += 3) {
      nweRows.push(imgs.slice(index, index + 3));
    }

    return nweRows;
  }

}
