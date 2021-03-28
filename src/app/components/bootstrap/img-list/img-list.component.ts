import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Img } from '../img/img';
import { ImgService } from '../img/img.service';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']
})
export class ImgListComponent implements OnInit {

  imgs: Img[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private imgService: ImgService
  ) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.imgs = this.activatedRoute.snapshot.data['imgs'];
  }

  load(){
    this.imgService
    .listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(imgs => {
      this.filter = '';
      this.imgs = this.imgs.concat(imgs); //gerar nova lista e fotos ao clicar no load
      if(!imgs.length) this.hasMore = false;
    });
  }
}
