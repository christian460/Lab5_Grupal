import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:8000/client'; // Cambia la URL a la de tu backend

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario: any): Observable<any> {
    const url = `${this.apiUrl}/`; // La URL del registro de usuarios en tu backend
    return this.http.post(url, usuario);
  }
}
