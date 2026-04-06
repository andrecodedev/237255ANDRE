import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoItem, PRODUTOS } from '../produtos.data';

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  produtos: ProdutoItem[] = PRODUTOS;

  constructor(private readonly router: Router) {}

  comprar(produtoId: number): void {
    this.router.navigate(['/produto-detalhe', produtoId]);
  }
}
