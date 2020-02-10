import { Component } from '@angular/core';
import { ListaProdutosComponent } from "./lista-produtos/lista-produtos.component";
import { Produto } from './produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produtos: Produto[] = [];
  title = 'loja-devmedia';
  
  public exibirConteudo = false;
  public toggleConteudo() {
    this.exibirConteudo = !this.exibirConteudo;
  } 

  constructor() {
    let p = new Produto();
    p.id = 1;
    p.nome = 'Macarrão';
    this.produtos.push(p);
  }
}
