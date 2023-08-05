import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Agrega esta importación
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AgregarComponent } from './agregar/agregar.component';
import { FooterComponent } from './footer/footer.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ListComponent } from './list/list.component';
import { ModificarComponent } from './modificar/modificar.component';
import { IndexComponent } from './index/index.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [    AppComponent, HeaderComponent, AgregarComponent, FooterComponent, EliminarComponent, ListComponent, ModificarComponent, IndexComponent, RegistroComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

