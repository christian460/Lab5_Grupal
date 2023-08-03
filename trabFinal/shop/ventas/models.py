from django.db import models
from user.models import Cliente
# Create your models here.

class Producto(models.Model):
    codigo = models.IntegerField()
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    img = models.ImageField(upload_to='pics', default='')
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad = models.PositiveIntegerField(default=0)
    oferta = models.BooleanField(default=False)

    def __str__(self):
        return self.nombre

class Venta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    fecha_venta = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def __str__(self):
        return f"Venta del cliente: {self.cliente.nombre} - Fecha: {self.fecha_venta}"