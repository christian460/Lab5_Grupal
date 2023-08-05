import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre: string = '';
  direccion: string = '';
  telefono: string = '';
  dni: number | null = null;
  password1: string = '';
  password2: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registrarUsuario(): void {
    if (this.password1 !== this.password2) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    const usuario = {
      username: this.nombre,
      direccion: this.direccion,
      telefono: this.telefono,
      dni: this.dni,
      password: this.password1
    };
    console.error(usuario);
    this.authService.registrarUsuario(usuario)
      .subscribe(
        () => {
          console.log('Usuario registrado con éxito');
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error al registrar usuario:', error);
        }
      );
  }
}
