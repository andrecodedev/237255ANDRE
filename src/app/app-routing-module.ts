import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home';
import { ApoliceSeguro } from './apolice-seguro/apolice-seguro';
import { CalculadoraImc } from './calculadora-imc/calculadora-imc';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'apolice-seguro', component: ApoliceSeguro },
  { path: 'calculadora-imc', component: CalculadoraImc },
  { path: 'calcular-media', component: CalcularMedia },
  { path: 'conversor-temperatura', component: ConversorTemperatura },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
