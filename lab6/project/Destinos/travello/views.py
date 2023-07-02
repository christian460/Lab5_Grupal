from django.shortcuts import render
from .models import Destination
# Create your views here.

def index(request):
    dests = Destination.objects.all()
    return render(request,'index.html',{'dests': dests})

def agregar(request):
    return render(request,'add.html')

def list(request):
    dests = Destination.objects.all()
    return render(request, 'list.html', {'dests': dests})