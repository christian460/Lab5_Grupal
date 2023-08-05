import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    const credenciales = {
      username: this.username,
      password: this.password
    };

    this.authService.iniciarSesion(credenciales).subscribe(
      (data: any) => {
        // Inicio de sesión exitoso, redirige a donde necesites
        this.router.navigate(['/']);
      },
      (error: any) => {
        // El inicio de sesión falló, maneja el error aquí
        console.log('Error de inicio de sesión:', error);
      }
    );
  }
}
