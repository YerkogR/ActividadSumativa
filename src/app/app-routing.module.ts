import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActualizarComponent} from "../app/components/actualizar/actualizar.component";
import {VisualizarComponent} from "../app/components/visualizar/visualizar.component";

const routes: Routes = [
  {path: '',component:ActualizarComponent},
  {path: 'Visualizar',component:VisualizarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
