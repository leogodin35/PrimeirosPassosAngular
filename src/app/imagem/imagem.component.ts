import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent implements OnInit {
  public imgURL = 'https://devmedia.com.br/logo.png';
  public url = 'https://devmedia.com.br';

  constructor() { }

  ngOnInit() {
  }

}

