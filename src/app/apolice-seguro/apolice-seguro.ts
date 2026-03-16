import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  standalone: false,
  templateUrl: './apolice-seguro.html',
  styleUrl: './apolice-seguro.css',
})
export class ApoliceSeguro {
  nomeSegurado: string = '';
  sexo: 'masculino' | 'feminino' | '' = '';
  idade: number | null = null;
  valorAutomovel: number | null = null;

  percentualApolice: number | null = null;
  valorApolice: number | null = null;
  erro: string = '';
  showResult: boolean = false;

  calcularApolice(): void {
    if (!this.nomeSegurado.trim() || !this.sexo || this.idade === null || this.valorAutomovel === null) {
      this.erro = 'Preencha nome, sexo, idade e valor do automovel.';
      this.showResult = false;
      return;
    }

    if (this.valorAutomovel <= 0 || this.idade <= 0) {
      this.erro = 'Informe idade e valor do automovel maiores que zero.';
      this.showResult = false;
      return;
    }

    if (this.sexo === 'feminino') {
      this.percentualApolice = 8;
    } else if (this.idade <= 25) {
      this.percentualApolice = 15;
    } else {
      this.percentualApolice = 10;
    }

    this.valorApolice = this.valorAutomovel * (this.percentualApolice / 100);
    this.erro = '';
    this.showResult = true;
  }

  limpar(): void {
    this.nomeSegurado = '';
    this.sexo = '';
    this.idade = null;
    this.valorAutomovel = null;
    this.percentualApolice = null;
    this.valorApolice = null;
    this.erro = '';
    this.showResult = false;
  }

}
