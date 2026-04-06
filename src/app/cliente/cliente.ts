import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  standalone: false,
  templateUrl: './cliente.html',
  styleUrl: './cliente.css',
})
export class Cliente {
  mostrarTabela = false;
  filtroNome = '';

  clientes = [
    { id: 1, nome: 'Mark',  email: 'mark@email.com',  cidade: 'São Paulo' },
    { id: 2, nome: 'Jacob', email: 'jacob@email.com', cidade: 'Rio de Janeiro' },
    { id: 3, nome: 'Larry', email: 'larry@email.com', cidade: 'Curitiba' }
  ];

  deveDestacar(nome: string): boolean {
    const filtro = this.filtroNome.trim().toLowerCase();
    return filtro.length > 0 && nome.toLowerCase().includes(filtro);
  }
}
