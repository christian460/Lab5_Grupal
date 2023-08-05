import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  productoId: number = 0;
  prod: any = {};
  modificacionExitosa: boolean = false;
  selectedFile: File | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.productoId = +idParam;
    } else {
      console.log("No puede ser null")
    }
    // Realizar solicitud HTTP para obtener los detalles del producto
    this.http.get<any>(`http://localhost:8000/producto/${this.productoId}/`).subscribe(
      (data) => {
        this.prod = data;
      },
      (error) => {
        console.error('Error al obtener los detalles del producto:', error);
      }
    );
  }

  modificarProducto(): void {
    const formData = new FormData();
    formData.append('codigo', this.prod.codigo);
    formData.append('nombre', this.prod.nombre);
    formData.append('descripcion', this.prod.descripcion);
    if (this.selectedFile) {
      formData.append('img', this.selectedFile, this.selectedFile.name);
    }
    formData.append('precio', this.prod.precio);
    formData.append('cantidad', this.prod.cantidad);
    formData.append('oferta', this.prod.oferta);

    this.http.put(`http://localhost:8000/producto/${this.productoId}/`, formData)
      .subscribe(
        () => {
          console.log('Producto modificado con éxito');
          this.modificacionExitosa = true; 

        },
        (error) => {
          console.error('Error al modificar el producto:', error);
        }
      );
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  regresarInicio(): void {
    this.router.navigate(['/']); // Cambia la ruta según tu configuración
  }
}
