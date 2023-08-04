import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Agrega esta importación
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  codigo: number = 0;
  nombre: string = '';
  img: File | null = null;
  desc: string = '';
  precio: number = 0;
  cantidad: number = 0;

  constructor(private http: HttpClient) {}

  submitForm(agregarForm: NgForm) {
    if (agregarForm.invalid) {
      return; // Si el formulario no es válido, no hacer nada
    }

    const formData = new FormData();
    formData.append('codigo', this.codigo.toString());
    formData.append('nombre', this.nombre);
    if (this.img) {
      formData.append('img', this.img, this.img.name);
    }
    formData.append('desc', this.desc);
    formData.append('precio', this.precio.toString());
    formData.append('cantidad', this.cantidad.toString());

    this.http.post('http://127.0.0.1:8000//agregar/', formData).subscribe(
      (response) => {
        console.log('Producto agregado exitosamente:', response);
        // Aquí podrías realizar alguna redirección o mostrar un mensaje de éxito
      },
      (error) => {
        console.error('Error al agregar el producto:', error);
      }
    );
  }
}
