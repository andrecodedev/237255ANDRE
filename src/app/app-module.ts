import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home';
import { Produto } from './produto';
import { ProdutoDetalhe } from './produto-detalhe';
import { Sobre } from './sobre';

@NgModule({
  declarations: [App, Home, Produto, ProdutoDetalhe, Sobre],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App],
})
export class AppModule {}
