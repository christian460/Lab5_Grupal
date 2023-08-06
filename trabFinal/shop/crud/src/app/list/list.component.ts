import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';  // Asegúrate de importar tu servicio ApiService

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ApiService]
})
export class ListComponent {
  productos: any[] = [];
  productoId: number = 0;
  prod: any = {};

  constructor(private api: ApiService, private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.getProductos();
  }

  getProductos = () => {
    this.api.getAllProductos().subscribe (
      data => {
        console.log(data);
        this.productos = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  irAModificar(_url: string): void {
    const idProducto = this.obtenerUltimoNumeroDeURL(_url)
    this.router.navigate(['/modificar', idProducto]);
  }
  irAEliminar(_url: string): void {
    const idProducto = this.obtenerUltimoNumeroDeURL(_url)
    this.router.navigate(['/eliminar', idProducto]);
  }

  obtenerUltimoNumeroDeURL(url: string): number | null {
    const matchResult = url.match(/(\d+)\/$/);
    if (matchResult) {
      return +matchResult[1];
    }
    return null;
  }
}
