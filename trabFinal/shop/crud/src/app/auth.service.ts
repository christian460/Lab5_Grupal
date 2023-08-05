import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registrarCliente(datos: any) {
    return this.http.post('http://localhost:8000/registro/', datos);
  }
  iniciarSesion(datos: any) {
    return this.http.post('http://localhost:8000/iniciar_sesion/', datos);
  }
}
