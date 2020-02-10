import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { UppercaseDirective } from './uppercase.directive';
import { ProdutoService } from './produto.service';
import { ContadorComponent } from './contador/contador.component';

const appRoutes: Routes = [
  { path: 'produtos', component: ProdutosComponent},
  { path: 'produtos/:id', component: EditarProdutoComponent},
  { path: 'contador', component: ContadorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ProdutosComponent,
    EditarProdutoComponent,
    UppercaseDirective,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
