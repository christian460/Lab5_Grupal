import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
  { path: 'agregar', component: AgregarComponent },
  { path: 'eliminar/:id', component: EliminarComponent },
  { path: 'modificar/:id', component: ModificarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
