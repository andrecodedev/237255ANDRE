import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  standalone: false,
  templateUrl: './conversor-temperatura.html',
  styleUrl: './conversor-temperatura.css',
})
export class ConversorTemperatura {
  celsius: number | null = null;
  fahrenheit: number | null = null;
  kelvin: number | null = null;
  erro: string = '';
  showResult: boolean = false;

  converter(): void {
    if (this.celsius === null) {
      this.erro = 'Informe a temperatura em Celsius.';
      this.showResult = false;
      return;
    }

    this.fahrenheit = (this.celsius * 9 / 5) + 32;
    this.kelvin = this.celsius + 273.15;
    this.erro = '';
    this.showResult = true;
  }

  limpar(): void {
    this.celsius = null;
    this.fahrenheit = null;
    this.kelvin = null;
    this.erro = '';
    this.showResult = false;
  }

}
