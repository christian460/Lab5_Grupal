import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent {
  productos: any[] = []; // Arreglo para almacenar las películas

  constructor(private api: ApiService) {
    this.getProductos();
  }

  getProductos = () => {
    this.api.getAllProductos().subscribe (
      data => {
        console.log(data);
        this.productos = data; // Asignar los datos de las películas al arreglo
      },
      error => {
        console.log(error);
      }
    )
  }
}
