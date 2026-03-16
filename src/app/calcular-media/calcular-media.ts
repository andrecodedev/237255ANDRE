import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  standalone: false,
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.css',
})
export class CalcularMedia {
  ac1: number | null = null;
  ac2: number | null = null;
  ag: number | null = null;
  af: number | null = null;
  mediaFinal: number | null = null;
  mediaFinalFormatada: string = '';
  status: string = '';
  showResult: boolean = false;
  erro: string = '';

  calcularMedia() {
    if (this.ac1 !== null && this.ac2 !== null && this.ag !== null && this.af !== null) {
      this.mediaFinal = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
      this.mediaFinalFormatada = this.mediaFinal.toFixed(2);
      this.status = this.mediaFinal >= 5 ? 'Aprovado' : 'Reprovado';
      this.showResult = true;
      this.erro = '';
    } else {
      this.showResult = false;
      this.erro = 'Preencha todas as notas para calcular a media.';
    }
  }

  limpar() {
    this.ac1 = null;
    this.ac2 = null;
    this.ag = null;
    this.af = null;
    this.mediaFinal = null;
    this.mediaFinalFormatada = '';
    this.status = '';
    this.showResult = false;
    this.erro = '';
  }
}
