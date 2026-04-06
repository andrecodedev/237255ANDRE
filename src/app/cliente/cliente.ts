import { Component } from '@angular/core';

interface ICliente {
  id: number;
  nome: string;
  email: string;
  cidade: string;
  ativo: boolean;
}

@Component({
  selector: 'app-cliente',
  standalone: false,
  templateUrl: './cliente.html',
  styleUrl: './cliente.css',
})
export class Cliente {
  mostrarTabela = false;
  filtroNome = '';

  clientes: ICliente[] = [
    { id: 1, nome: 'Mark',  email: 'mark@email.com',  cidade: 'São Paulo',      ativo: true  },
    { id: 2, nome: 'Jacob', email: 'jacob@email.com', cidade: 'Rio de Janeiro', ativo: false },
    { id: 3, nome: 'Larry', email: 'larry@email.com', cidade: 'Curitiba',       ativo: true  }
  ];

  deveDestacar(nome: string): boolean {
    const filtro = this.filtroNome.trim().toLowerCase();
    return filtro.length > 0 && nome.toLowerCase().includes(filtro);
  }
}
