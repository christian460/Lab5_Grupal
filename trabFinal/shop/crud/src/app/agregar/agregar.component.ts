import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  nuevoProducto: any = {
    codigo: 0,
    nombre: '',
    descripcion: '',
    img: null,
    precio: 0,
    cantidad: 0,
    oferta: false
  };
  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  agregarProducto(): void {
    const formData = new FormData();
    formData.append('codigo', this.nuevoProducto.codigo.toString());
    formData.append('nombre', this.nuevoProducto.nombre);
    formData.append('descripcion', this.nuevoProducto.descripcion);
    if (this.selectedFile) {
      formData.append('img', this.selectedFile, this.selectedFile.name);
    }
    formData.append('precio', this.nuevoProducto.precio.toString());
    formData.append('cantidad', this.nuevoProducto.cantidad.toString());
    formData.append('oferta', this.nuevoProducto.oferta.toString());

    this.http.post('http://localhost:8000/producto/', formData)
      .subscribe(
        (response) => {
          console.log('Producto agregado con éxito:', response);
          // Puedes redirigir al usuario a la lista de productos o realizar otra acción
        },
        (error) => {
          console.error('Error al agregar el producto:', error);
        }
      );
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }
}
