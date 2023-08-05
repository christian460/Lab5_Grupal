import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { IndexComponent } from './index/index.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'eliminar/:id', component: EliminarComponent },
  { path: 'modificar/:id', component: ModificarComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
