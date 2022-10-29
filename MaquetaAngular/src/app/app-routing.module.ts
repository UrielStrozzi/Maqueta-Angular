import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component'

export const routes: Routes = [
  { path: 'encabezado', component: EncabezadoComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [

]