from django.db import models

# Create your models here.

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)
    telefono = models.CharField(max_length=20)
    dni = models.IntegerField()
    username = models.CharField(max_length=20, default="", null=False)
    password = models.CharField(max_length=20, default="", null=False)

    def __str__(self):
        return self.nombre