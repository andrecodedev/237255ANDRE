import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home';
import { Produto } from './produto';
import { ProdutoDetalhe } from './produto-detalhe';
import { Sobre } from './sobre';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'produtos', component: Produto },
  { path: 'produto-detalhe/:id', component: ProdutoDetalhe },
  { path: 'sobre', component: Sobre },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
