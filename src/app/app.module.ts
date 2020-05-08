import { ProdutoService } from './produtos/produtos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {registerLocaleData} from '@angular/common';
import localPt from '@angular/common/locales/pt';
registerLocaleData(localPt);

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { DataBindComponent } from './demos/data-bind/data-bind.component';
import { FormsModule} from "@angular/forms";
import { APP_BASE_HREF } from '@angular/common';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ContatoComponent,
    SobreComponent,
    DataBindComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash:false})]
  ],
  providers: [
    ProdutoService,
    {provide:APP_BASE_HREF, useValue:'/'}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
