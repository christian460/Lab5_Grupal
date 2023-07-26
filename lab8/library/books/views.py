from django.shortcuts import render
from reservation.models import Libro

# Create your views here.

def index(request):
    libros = Libro.objects.all()
    return render(request,'index.html',{'libros':libros})