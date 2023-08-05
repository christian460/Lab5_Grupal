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

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/productos/${id}/`);
  }
}

