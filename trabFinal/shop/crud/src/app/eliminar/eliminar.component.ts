import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  productoId: number = 0;
  prod: any = {};
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.productoId = +idParam;
    } else {
      console.log("No puede ser null")
    }
    this.http.get<any>(`http://localhost:8000/producto/${this.productoId}/`).subscribe(
      (data) => {
        this.prod = data;
        console.log(this.prod.img)
      },
      (error) => {
        console.error('Error al obtener los detalles del producto:', error);
      }
    );
  }

  eliminarProducto(): void {
    this.http.delete(`http://localhost:8000/producto/${this.productoId}/`)
      .subscribe(
        () => {
          console.log('Producto eliminado con éxito');
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Error al eliminar el producto:', error);
        }
      );
  }
}

