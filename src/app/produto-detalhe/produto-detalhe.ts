import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoItem, PRODUTOS } from '../produtos.data';

@Component({
  selector: 'app-produto-detalhe',
  standalone: false,
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css',
})
export class ProdutoDetalhe implements OnInit {
  produtoSelecionado?: ProdutoItem;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const produtoId = Number(idParam);
    this.produtoSelecionado = PRODUTOS.find((produto) => produto.id === produtoId);
  }
}
