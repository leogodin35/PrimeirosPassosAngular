import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  public livros = [
    'Como morrem os probres e outros ensais',
    'A revolução dos bixos',
    '1988'
  ];
  constructor() { }

  ngOnInit() {
  }

}
