from django.db import models

# Create your models here.

class Libro(models.Model):
    nombre = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    codigo = models.IntegerField()
    img = models.ImageField(upload_to='pics', default='')
    desc = models.TextField(default="")
    
    def __str__(self):
        return self.nombre

class User(models.Model):
    nombre = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    deuda = models.BooleanField(default=False)
    libroPrest = models.ForeignKey(Libro, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre