import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  direccion: string = '';
  telefono: string = '';
  dni: number = 0;
  password1: string = '';
  password2: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  registrarse() {
    if (this.password1 === this.password2) {
      const nuevoCliente = {
        nombre: this.nombre,
        direccion: this.direccion,
        telefono: this.telefono,
        dni: this.dni,
        password1: this.password1,
        password2: this.password2
      };

      this.authService.registrarCliente(nuevoCliente).subscribe(
        (data: any) => {
          // El registro fue exitoso, redirige a donde necesites
          this.router.navigate(['/']);
        },
        (error: any) => {
          // El registro falló, maneja el error aquí
          console.log('Error de registro:', error);
        }
      );
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }
}
