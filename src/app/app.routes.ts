import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import {Routes} from '@angular/router'
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DataBindComponent } from './demos/data-bind/data-bind.component';

export const rootRouterConfig:Routes=
[
    {path:'',redirectTo:'/home',pathMatch:'full'},   
    {path:"home",component:HomeComponent},
    {path:"contato",component:ContatoComponent},
    {path:"sobre",component:SobreComponent},
    {path:"feature-data-bind",component:DataBindComponent},
    {path:"produtos",component:ListaProdutoComponent},
    {path:"produto-detalhe/:id",component:ListaProdutoComponent},
    {path:'**',redirectTo:'/home',pathMatch:'full'}//Error 404
    
];