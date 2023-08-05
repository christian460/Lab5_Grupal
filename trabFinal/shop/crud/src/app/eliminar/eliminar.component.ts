import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css'],
  providers: [ApiService]
})
export class EliminarComponent implements OnInit {
  prod: any;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productoId = +params['id'];
      this.api.obtenerProducto(productoId).subscribe(
        response => {
          this.prod = response;
        },
        error => {
          console.error('Error al obtener el producto:', error);
        }
      );
    });
  }

  eliminarProducto() {
    if (confirm('¿Está seguro de que desea eliminar este producto?')) {
      this.api.eliminarProducto(this.prod.id).subscribe(
        response => {
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error al eliminar el producto:', error);
        }
      );
    }
  }
}