import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home';
import { ApoliceSeguro } from './apolice-seguro/apolice-seguro';
import { CalculadoraImc } from './calculadora-imc/calculadora-imc';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { TelaPai } from './tela-pai/tela-pai';
import { TelaFilho1 } from './tela-filho1/tela-filho1';
import { TelaFilho2 } from './tela-filho2/tela-filho2';
import { Cliente } from './cliente/cliente';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'apolice-seguro', component: ApoliceSeguro },
  { path: 'calculadora-imc', component: CalculadoraImc },
  { path: 'calcular-media', component: CalcularMedia },
  { path: 'conversor-temperatura', component: ConversorTemperatura },
  { path: 'tela-pai', component: TelaPai, children: [
    { path: 'filho-1', component: TelaFilho1 },
    { path: 'filho-2', component: TelaFilho2 }
  ] },
  { path: 'cliente', component: Cliente },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
