import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new      
                                      HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }
  getAllProductos():Observable<any>{
    return this.http.get(this.baseurl+'/producto/', 
    {headers: this.httpHeaders});
  }
  obtenerProducto(id: number): Observable<any> {
    return this.http.get(`${this.baseurl}/productos/${id}/`);
  }
  agregarProducto(producto: any): Observable<any> {
    const formData = new FormData();
    for (const key in producto) {
      if (producto.hasOwnProperty(key)) {
        if (key === 'img') {
          formData.append(key, producto[key], producto[key].name);
        } else {
          formData.append(key, producto[key]);
        }
      }
    }
    return this.http.post(`${this.baseurl}/producto/`, formData);
  }
  modificarProducto(id: number, producto: any): Observable<any> {
    const formData = new FormData();
    for (const key in producto) {
      if (producto.hasOwnProperty(key)) {
        if (key === 'img') {
          formData.append(key, producto[key], producto[key].name);
        } else {
          formData.append(key, producto[key]);
        }
      }
    }
    return this.http.put(`${this.baseurl}/productos/${id}/`, formData);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/productos/${id}/`);
  }
}

