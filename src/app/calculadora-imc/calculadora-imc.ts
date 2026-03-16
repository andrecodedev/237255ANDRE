import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  standalone: false,
  templateUrl: './calculadora-imc.html',
  styleUrl: './calculadora-imc.css',
})
export class CalculadoraImc {
  peso: number | null = null;
  altura: number | null = null;
  imc: number | null = null;
  classificacao: string = '';
  erro: string = '';
  showResult: boolean = false;

  calcularImc(): void {
    if (this.peso === null || this.altura === null) {
      this.erro = 'Preencha peso e altura para calcular o IMC.';
      this.showResult = false;
      return;
    }

    if (this.peso <= 0 || this.altura <= 0) {
      this.erro = 'Peso e altura devem ser maiores que zero.';
      this.showResult = false;
      return;
    }

    this.imc = this.peso / (this.altura * this.altura);

    if (this.imc < 18.5) {
      this.classificacao = 'Abaixo do peso';
    } else if (this.imc < 25) {
      this.classificacao = 'Peso normal';
    } else if (this.imc < 30) {
      this.classificacao = 'Sobrepeso';
    } else if (this.imc < 35) {
      this.classificacao = 'Obesidade grau I';
    } else if (this.imc < 40) {
      this.classificacao = 'Obesidade grau II';
    } else {
      this.classificacao = 'Obesidade grau III';
    }

    this.erro = '';
    this.showResult = true;
  }

  limpar(): void {
    this.peso = null;
    this.altura = null;
    this.imc = null;
    this.classificacao = '';
    this.erro = '';
    this.showResult = false;
  }

}
